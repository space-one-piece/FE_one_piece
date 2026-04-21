import { plainInstance } from "@/shared/api/axios-instance"
import useAuthStore from "@/shared/api/use-auth-store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import z from "zod"

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력해주세요")
    .email("올바른 이메일 형식으로 입력해주세요"),
  password: z.string().min(1, "비밀번호를 입력해주세요"),
})

type LoginSchema = z.input<typeof loginSchema>

type LoginResponse = {
  access: string
  refresh: string
}

const useLogin = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken)
  const setRefreshToken = useAuthStore((state) => state.setRefreshToken)

  const { mutate } = useMutation({
    mutationFn: (body: LoginSchema) =>
      plainInstance.post<LoginResponse>("/accounts/login", body),
    onSuccess(data) {
      const { access, refresh } = data.data
      setAccessToken(access)
      setRefreshToken(refresh)
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: LoginSchema) => {
    console.log({ data })
    mutate(data)
  }

  const submitForm = handleSubmit(onSubmit)

  return { register, submitForm, errors }
}

export default useLogin
