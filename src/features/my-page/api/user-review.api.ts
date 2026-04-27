import { instance } from "@/shared/api/axios-instance"
import type { ReviewItem } from "../mocks/review.mock"

export const getReviewList = async (): Promise<ReviewItem[]> => {
  const { data } = await instance.get("/analyses/reviews")
  return data
}

export const deleteReview = async (reviewId: number): Promise<void> => {
  await instance.delete(`/analyses/${reviewId}/review`)
}

export const editReview = async ({
  reviewId,
  type,
  review,
}: {
  reviewId: number
  type: string
  review: string
}): Promise<void> => {
  await instance.patch(
    `/analyses/reviews/${reviewId}`,
    { review },
    {
      params: { type },
    }
  )
}
