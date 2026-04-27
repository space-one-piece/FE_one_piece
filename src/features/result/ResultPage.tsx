import {
  CenterContainer,
  Container,
  PageIntro,
  Vstack,
} from "@/shared/components"

import { useAnalysisResultQuery } from "./hooks/useAnalysisResultQuery"
import AISection from "./page/sections/ai-section/AISection"
import BottomSection from "./page/sections/bottom-section/BottomSection"
import TopCardSection from "./page/sections/card-section/TopCardSection"
import ScentSection from "./page/sections/scent-section/ScentSection"

type ResultPageProps = {
  resultId: string
}

const ResultPage = ({ resultId }: ResultPageProps) => {
  const { data: result, isLoading, isError } = useAnalysisResultQuery(resultId)

  if (isLoading) {
    return <div>분석 결과를 불러오는 중입니다.</div>
  }

  if (isError || !result) {
    return <div>분석 결과를 불러올 수 없습니다.</div>
  }

  return (
    <CenterContainer className="w-full py-2xl">
      <Container
        width="xl"
        isPadded
        className="min-h-screen max-w-container-xl bg-surface-default"
      >
        <Vstack className="items-center justify-between gap-xs pb-lg">
          <PageIntro
            title="당신을 위한 향기 추천 결과"
            description="당신의 취향과 정보를 분석하여, 가장 잘어울리는 향기를 찾았습니다"
          />

          <TopCardSection result={result} />
          <AISection aiComment={result.ai_comment} />
          <ScentSection scent={result.recommended_scent} />
          <BottomSection
            resultId={result.id}
            similarScents={result.recommended_scent.similar_scents ?? []}
          />
        </Vstack>
      </Container>
    </CenterContainer>
  )
}

export default ResultPage
