import { RoundBox } from "@/shared/components"
import type { ReviewResult } from "@/shared/types/api/api.type"

type ReviewCardInMainProps = {
  review: ReviewResult
  index: number
}
const ReviewCardInMain = ({ review, index }: ReviewCardInMainProps) => {
  return (
    <RoundBox
      style={{
        transform: `translateX(calc((-100% - 16px) * ${index}))`,
        transition: "transform 300ms ease",
      }}
      padding="none"
      className="w-60 h-90 shrink-0 bg-amber-100"
    >
      {JSON.stringify(review)}
    </RoundBox>
  )
}

export default ReviewCardInMain
