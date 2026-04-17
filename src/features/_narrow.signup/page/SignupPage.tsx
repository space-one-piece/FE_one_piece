import NarrowTitleSection from "@/features/_narrow/components/narrow-title-section/NarrowTitleSection"
import { Button, Input, Vstack } from "@/shared/components"
import Labeled from "@/shared/components/inputs/labeled/Labeled"

const SignupPage = () => {
  return (
    <form>
      <Vstack gap="xl">
        <NarrowTitleSection
          title="공간의 완성, 향기의 조각"
          description="fragmnt에서 당신만의 향기 아카이브를 시작하세요"
        />
        <Labeled>
          <Labeled.Title>이메일</Labeled.Title>
          <Input placeholder="your@email.com" />
        </Labeled>
        <Labeled>
          <Labeled.Title>이메일 인증코드</Labeled.Title>
          <Input placeholder="6자리 코드를 입력해주세요" />
        </Labeled>
        <Labeled>
          <Labeled.Title>비밀번호</Labeled.Title>
          <Input placeholder="영문, 숫자를 포함해 6자리 이상으로 만들어주세요" />
        </Labeled>
        <Labeled>
          <Labeled.Title>이름</Labeled.Title>
          <Input placeholder="이름을 입력해주세요" />
        </Labeled>
        <Labeled>
          <Labeled.Title>전화번호</Labeled.Title>
          <Input placeholder={`"-"없이 숫자만 입력해주세요`} />
        </Labeled>
        <Labeled>
          <Labeled.Title>전화번호 인증코드</Labeled.Title>
          <Input placeholder="6자리 코드를 입력해주세요" />
        </Labeled>
        <Labeled>
          <Labeled.Title>생년월일</Labeled.Title>
          <Input placeholder="8자리 숫자 입력 (예: 19980514)" />
        </Labeled>
        <Button className="mt-lg">회원가입</Button>
      </Vstack>
    </form>
  )
}

export default SignupPage
