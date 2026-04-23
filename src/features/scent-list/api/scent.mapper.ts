import type { ScentFilterCategory } from "@/shared/constants/scent-filter"
import type { ScentCardItem } from "../types/scent-card.type"
import type { ScentApiItem } from "./scent-api.type"

const tagMap: Record<string, { category: ScentFilterCategory; name: string }> =
  {
    dark: { category: "mood", name: "어두운" },
    fresh: { category: "mood", name: "산뜻한" },

    spring: { category: "season", name: "봄" },
    summer: { category: "season", name: "여름" },
    autumn: { category: "season", name: "가을" },
    winter: { category: "season", name: "겨울" },

    wood: { category: "notes", name: "우드" },
    vanilla: { category: "notes", name: "바닐라" },
    citrus: { category: "notes", name: "시트러스" },
    rose: { category: "notes", name: "로즈" },

    light: { category: "intensity", name: "약한" },
    medium: { category: "intensity", name: "보통" },
    strong: { category: "intensity", name: "진한" },
  }

export const mapScentApiToCard = (item: ScentApiItem): ScentCardItem => {
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    imageUrl: item.thumbnail_url,
    tags: item.tags
      .map((tag) => tagMap[tag])
      .filter((tag): tag is { category: ScentFilterCategory; name: string } =>
        Boolean(tag)
      ),
  }
}
