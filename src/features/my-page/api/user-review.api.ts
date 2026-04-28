import { instance } from "@/shared/api/axios-instance"
import type { ReviewItem } from "../types/review.type"

export const getReviewList = async (): Promise<ReviewItem[]> => {
  const { data } = await instance.get("/analyses/reviews")
  return data
}

// 리뷰 상세 페이지 (추후 연결 예정)
export const getReviewDetail = async ({
  reviewId,
  type,
}: {
  reviewId: number
  type: string
}): Promise<ReviewItem> => {
  const { data } = await instance.get(`/analyses/reviews/${reviewId}`, {
    params: { type },
  })

  return data
}

export const deleteReview = async ({
  reviewId,
  type,
}: {
  reviewId: number
  type: string
}): Promise<void> => {
  await instance.delete(`/analyses/reviews/${reviewId}`, {
    params: { type },
  })
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
