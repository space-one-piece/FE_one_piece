import { RoundBox } from "@/shared/components"
import type { ReviewResult } from "@/shared/types/api/api.type"

type ReviewCardInMainProps = {
  review: ReviewResult
}
const ReviewCardInMain = ({ review }: ReviewCardInMainProps) => {
  return (
    <RoundBox padding="none" className="w-60 h-90 shrink-0 bg-amber-100">
      {JSON.stringify(review)}
    </RoundBox>
  )
}

export default ReviewCardInMain
