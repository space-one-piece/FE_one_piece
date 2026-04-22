import { CenterContainer, Container, Vstack } from "@/shared/components"
import TopCardSection from "./sections/card-section/TopCardSection"

export default function ResultPage() {
  return (
    <CenterContainer className="w-full py-2xl">
      <Container
        width="xl"
        isPadded
        className="min-h-screen max-w-container-xl bg-surface-default"
      >
        {/* 상단 헤더 */}
        <Vstack className="gap-xs pb-lg items-center justify-between">
          <h1 className="text-xl font-bold text-text-primary">
            당신을 위한 향기 추천 결과
          </h1>
          <p className="text-text-sub text-md items-center justify-center gap-xs flex">
            당신의 취향과 정보를 분석하여, 가장 어울리는 향기를 찾았습니다.
            <br />더 좋은 분위기를 연출할 수 있는 향기로 일상에 특별함을
            더해보세요
          </p>
          <TopCardSection />
        </Vstack>
      </Container>
    </CenterContainer>
  )
}
