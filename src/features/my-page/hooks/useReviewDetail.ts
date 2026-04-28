import { useQuery } from "@tanstack/react-query"
import { getReviewDetail } from "../api/user-review.api"

type Props = {
  id: number
  type: string
  enabled?: boolean
}

export const useReviewDetail = ({ id, type, enabled = true }: Props) => {
  return useQuery({
    queryKey: ["review-detail", id, type],
    queryFn: () =>
      getReviewDetail({
        reviewId: id,
        type,
      }),
    enabled: enabled && Number.isFinite(id),
  })
}
