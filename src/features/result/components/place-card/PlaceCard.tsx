import { cn } from "@/lib/utils"
import { Tag } from "@/shared/components"

type PlaceCardProps = {
  imageSrc: string
  imageAlt?: string
  title: string
  description: string
  matchRate?: number
  onClick?: () => void
  className?: string
}

export default function PlaceCard({
  imageSrc,
  imageAlt = "place image",
  title,
  description,
  matchRate,
  onClick,
  className,
}: PlaceCardProps) {
  const Container = onClick ? "button" : "div"

  return (
    <Container
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={cn(
        // TODO: 카드 높이 고정, 이미지 비율 유지하면서 꽉 채우기
        "relative block h-[240px] w-full overflow-hidden rounded-lg text-left",
        className
      )}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {typeof matchRate === "number" && (
        <div className="absolute right-md top-md">
          <Tag
            key={matchRate}
            label={`${matchRate}% MATCH`}
            size="sm"
            variant="subtle"
          />
        </div>
      )}

      <div className="absolute bottom-lg left-lg right-lg">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-white/85">{description}</p>
      </div>
    </Container>
  )
}
