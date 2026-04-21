import { Button, EmptyImage, Tag } from "@/shared/components"
import { fragranceDetailMock as data } from "../../../mocks/fragranceDetail.mock"

import { BookmarkIcon, Share2 } from "lucide-react"

const TopCard = () => {
  return (
    <div className="flex flex-col gap-md items-center justify-center">
      <div className="mb-md">
        <Tag label={data.category} size="sm" variant="outlined" />
      </div>
      {data.imageSrc ? (
        <img
          src={data.imageSrc}
          alt={data.nameEn}
          className="w-[220px] aspect-square object-cover rounded-xl mb-md"
        />
      ) : (
        <div className="w-[220px] aspect-square flex items-center justify-center mb-md">
          <EmptyImage type="image" size="md" />
        </div>
      )}
      <div className="text-xl font-bold">{data.nameKo}</div>
      <div className="text-sm text-text-sub">{data.nameEn}</div>
      <div className="mt-md text-text-primary">{data.description}</div>
      {/* tags */}
      <div className="flex flex-wrap gap-md m-md">
        {data.tags.map((tag) => (
          <Tag key={tag} label={tag} size="sm" variant="soft" />
        ))}
      </div>
      {/* buttons */}
      <div className="mt-md flex items-center justify-center gap-lg">
        {/* TODO: OnClick 추가 */}
        <Button size="lg" radius="full">
          <BookmarkIcon size={18} /> 내 향기로 저장
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
