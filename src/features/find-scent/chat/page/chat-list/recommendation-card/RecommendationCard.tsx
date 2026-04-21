import { Button, Hstack, RoundBox, Tag, Vstack } from "@/shared/components"
import type { RecommendationCardData } from "../../../types/message.types"

type RecommendationCardProps = {
  data: RecommendationCardData
}

const RecommendationCard = ({ data }: RecommendationCardProps) => {
  const { imageSrc, imageAlt, name, englishName, description, tags } = data

  return (
    <RoundBox className="w-full max-w-[440px] bg-white" padding="none">
      <Vstack gap="none">
        <div>
          <img
            className="h-80 w-full rounded-t-xl object-cover"
            src={imageSrc}
            alt={imageAlt}
          />
        </div>

        <section className="flex flex-col gap-md p-lg">
          <div className="flex flex-col gap-xs">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="font-light">{englishName}</p>
            <p className="text-text-sub">{description}</p>
          </div>

          <ul className="flex flex-wrap gap-sm">
            {tags.map((tag) => (
              <li key={tag}>
                <Tag label={tag} />
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-md">
            <Button className="w-full">자세히 보기</Button>

            <Hstack>
              <button className="h-8 w-full rounded-md border border-border">
                저장하기
              </button>
              <button className="h-8 w-full rounded-md border border-border">
                다시 추천
              </button>
            </Hstack>
          </div>
        </section>
      </Vstack>
    </RoundBox>
  )
}

export default RecommendationCard
