import NarrowTitleSection from "@/features/_narrow/components/narrow-title-section/NarrowTitleSection"
import { headlessInstance } from "@/shared/api/axios-instance"
import { Button, Input, Vstack } from "@/shared/components"
import Labeled from "@/shared/components/inputs/labeled/Labeled"
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
const LoginPage = () => {
  const postMutation = useMutation({
    mutationFn: (body: LoginSchema) =>
      headlessInstance.post("/accounts/login", body),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: LoginSchema) => {
    console.log({ data })
    postMutation.mutate(data)
  }

  // TODO: 인증 번호는 어디에 쓰지??
  // TODO: 현재 api body 에 인증 번호가 없다
  // TODO: 현재 CORS 막혀 있음. 백엔드에 열어달라고 해야
  console.log({ errors })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Vstack gap="xl">
        <NarrowTitleSection
          title="공간의 완성, 향기의 조각"
          description="fragmnt에서 당신만의 향기 아카이브를 시작하세요"
        />

        <Labeled isError={Boolean(errors.email)}>
          <Labeled.Title>이메일</Labeled.Title>
          <Input
            {...register("email")}
            placeholder="your@email.com"
            status={errors.email ? "error" : "none"}
          />
          <Labeled.Message>{errors.email?.message}</Labeled.Message>
        </Labeled>

        <Labeled isError={Boolean(errors.password)}>
          <Labeled.Title>비밀번호</Labeled.Title>
          <Input
            {...register("password")}
            status={errors.password ? "error" : "none"}
            placeholder="비밀번호를 입력해주세요"
          />
          <Labeled.Message>{errors.password?.message}</Labeled.Message>
        </Labeled>

        <Button className="mt-lg">로그인</Button>
      </Vstack>
    </form>
  )
}

export default LoginPage
