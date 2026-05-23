import { Vstack } from "@/shared/components"
import SectionVstack from "../section-container/SectionContainer"

const SkeletonBlock = ({ className }: { className: string }) => {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-sm bg-gray-10 ${className}`}
    />
  )
}

const FAQSkeleton = () => {
  return (
    <SectionVstack className="items-center" id="main-faq-skeleton">
      <Vstack className="w-full items-center text-center">
        <SkeletonBlock className="h-[29px] w-[180px]" />
        <SkeletonBlock className="h-[23px] w-full max-w-[420px]" />
      </Vstack>

      <div className="w-full rounded-md border border-border bg-card p-xl">
        <Vstack gap="none">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="border-b border-border py-lg last:border-b-0"
            >
              <div className="flex items-center justify-between gap-lg">
                <SkeletonBlock className="h-[23px] w-full max-w-[520px]" />
                <SkeletonBlock className="size-lg shrink-0 rounded-full" />
              </div>
              {index === 0 && (
                <Vstack gap="sm" className="pt-md">
                  <SkeletonBlock className="h-[23px] w-full" />
                  <SkeletonBlock className="h-[23px] w-11/12" />
                  <SkeletonBlock className="h-[23px] w-4/5" />
                </Vstack>
              )}
            </div>
          ))}
        </Vstack>
      </div>

      <Vstack className="items-center">
        <SkeletonBlock className="h-[23px] w-[220px]" />
        <SkeletonBlock className="h-button-md w-[96px] rounded-full" />
      </Vstack>
    </SectionVstack>
  )
}

export default FAQSkeleton
