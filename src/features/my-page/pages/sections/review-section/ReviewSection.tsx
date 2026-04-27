import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import { EmptyState } from "@/shared/components"

import { useDeleteReview, useReviewList } from "@/features/my-page/hooks"
import LoadingState from "@/shared/components/loading-state/LoadingState"
import { formatDate } from "@/shared/utils/date"
import { ReviewCard } from "./review-card/ReviewCard"

export default function ReviewSection() {
  const { data: reviewList = [], error, isLoading } = useReviewList()
  const { mutate: deleteMutate } = useDeleteReview()
  const hasItems = reviewList && reviewList.length > 0

  if (isLoading) {
    return <LoadingState />
  }
  if (error) {
    return <div>리뷰를 불러오지 못했어요.</div>
  }

  return (
    <section>
      <h2 className="px-md text-center text-lg font-bold text-text-primary">
        내가 쓴 리뷰{" "}
        <span className="font-extrabold text-text-highlight">
          {reviewList?.length || 0}
        </span>
        개
      </h2>

      {hasItems ? (
        <div className="mt-md flex flex-col gap-md">
          {reviewList?.map((item) => (
            <ReviewCard
              key={item.id}
              reviewId={item.id}
              type={item.type}
              title={item.eng_name}
              rating={item.rating}
              content={item.review}
              date={formatDate(item.created_at)}
              onDelete={() => deleteMutate(item.id)}
            />
          ))}
        </div>
      ) : (
        <div className="mt-2xl flex justify-center">
          <EmptyState
            imageSrc={EmptyStateImage}
            title="작성한 리뷰가 없어요"
            description="추천받은 향기에 대한 리뷰를 남겨보세요"
            className="border-none"
          />
        </div>
      )}
    </section>
  )
}
