import { plainInstance } from "@/shared/api/axios-instance"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import z from "zod"

const signupSchema = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력해주세요")
    .email("올바른 이메일 형식으로 입력해주세요"),
  email_token: z
    .string()
    .min(6, "6자리의 인증번호를 입력해주세요")
    .max(6, "6자리의 인증번호를 입력해주세요"),
  password: z
    .string()
    .min(1, "비밀번호를 입력해주세요")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
      "영문과 숫자를 포함해 8자리 이상을 입력해주세요"
    ),
  name: z.string().min(1, "이름을 입력해주세요"),
  phone_number: z.string().min(1, "전화번호를 입력해주세요"),
  phone_token: z
    .string()
    .min(6, "6자리의 인증번호를 입력해주세요")
    .max(6, "6자리의 인증번호를 입력해주세요"),
  birthday: z
    .string()
    .min(8, "8자리의 생년월일을 입력해주세요")
    .max(8, "8자리의 생년월일을 입력해주세요"),
})

type SignupSchema = z.input<typeof signupSchema>

const useSignup = () => {
  const { mutate } = useMutation({
    mutationFn: (body: SignupSchema) =>
      plainInstance.post("accounts/signup", body),
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) })

  const onSubmit = (data: SignupSchema) => {
    mutate(data)
  }

  const submitForm = handleSubmit(onSubmit)

  // TODO: verification 로직 추후 작성되면 한 번 더 정리해야
  const handleEmailVerification = async () => {
    const email = watch().email
    await plainInstance.post(
      "https://fragmnt.pics/api/v1/accounts/verification/send-email",
      {
        email,
      }
    )
  }

  const handlePhoneVerification = async () => {
    const phone_number = watch().phone_number
    await plainInstance.post(
      "https://fragmnt.pics/api/v1/accounts/verification/send-sms",
      {
        phone_number,
      }
    )
  }

  return {
    register,
    submitForm,
    errors,
    handleEmailVerification,
    handlePhoneVerification,
  }
}

export default useSignup
