import { Button, EmptyImage, Tag } from "@/shared/components"
import type { FragranceDetailData } from "@/shared/types/scent-types/scent.type"
import { BookmarkIcon, Share2 } from "lucide-react"

type TopCardProps = {
  data: FragranceDetailData
}

const TopCard = ({ data }: TopCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-md">
      <div className="mb-md">
        <Tag label={data.category} size="sm" variant="outlined" />
      </div>

      {data.imageSrc ? (
        <img
          src={data.imageSrc}
          alt={data.nameEn}
          className="mb-md aspect-square w-[220px] rounded-xl object-cover"
        />
      ) : (
        <div className="mb-md flex aspect-square w-[220px] items-center justify-center">
          <EmptyImage type="image" size="md" />
        </div>
      )}

      <div className="text-xl font-bold">{data.nameKo}</div>
      <div className="text-sm text-text-sub">{data.nameEn}</div>

      <div className="mt-md text-center text-text-primary">
        {data.description}
      </div>

      {/* tags */}
      <div className="m-md flex flex-wrap justify-center gap-md">
        {data.tags.map((tag) => (
          <Tag key={tag} label={tag} size="sm" variant="soft" />
        ))}
      </div>

      {/* buttons */}
      <div className="mt-md flex items-center justify-center gap-lg">
        <Button size="lg" radius="full">
          <BookmarkIcon size={18} />내 향기로 저장
        </Button>

        <Button size="lg" radius="full" style="outlined">
          <Share2 size={18} />
          공유하기
        </Button>
      </div>
    </div>
  )
}

export default TopCard
