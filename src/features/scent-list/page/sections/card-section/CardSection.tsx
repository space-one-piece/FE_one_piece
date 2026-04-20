import type { ScentCardItem } from "@/features/scent-list/mocks/scent-card.mock"
import { ArchiveCard } from "@/shared/components"

type CardSectionProps = {
  items: ScentCardItem[]
}

export default function CardSection({ items }: CardSectionProps) {
  if (items.length === 0) {
    return (
      <section className="py-2xl text-center text-text-sub">
        조건에 맞는 향수가 없어요.
      </section>
    )
  }

  return (
    <section className="grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3 pt-2xl">
      {/* TODO: 카드를 클릭했을 때 상세 페이지로 이동할 수 있도록 수정 */}
      {items.map((item) => (
        <ArchiveCard
          key={item.id}
          imageSrc={item.imageUrl}
          imageAlt={item.name}
          tags={item.tags.map((tag) => tag.name)}
          title={item.name}
          description={item.description}
        />
      ))}
    </section>
  )
}
