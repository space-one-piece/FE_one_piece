import { plainInstance } from "@/shared/api/axios-instance"
import type { ReviewResult } from "@/shared/types/api/api.type"
import type { QueryClient } from "@tanstack/react-query"

export const makeReviewsInMainQueryOptions = () => {
  return {
    queryKey: ["reviews-in-main"],
    queryFn: async () => {
      const response = await plainInstance.get("/question/mood/results")
      return response.data as ReviewResult[]
    },
  }
}

const mainLoaderFn = async (queryClient: QueryClient) => {
  const reviewsInMain = await queryClient.ensureQueryData(
    makeReviewsInMainQueryOptions()
  )
  console.log({ reviewsInMain })
  return { reviewsInMain }
}

export default mainLoaderFn
