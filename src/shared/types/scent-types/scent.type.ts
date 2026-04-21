// TODO: 백엔드에서 타입 보내주면 수정해야됨...
import type { BaseImageCardProps } from "@/shared/types"

export type SimilarScentProps = BaseImageCardProps & {
  label?: string
  description?: string
}

export type ProfileMetric = {
  label: string
  value: number
  leftText: string
  rightText: string
}

export type RecommendedPlace = {
  id: number
  name: string
  description: string
  imageSrc: string
  matchRate: number
}

export type SimilarScent = {
  id: number
  name: string
  imageSrc: string
  tags: string[]
  description: string
}

export type FragranceDetailData = {
  id: number
  category: string
  nameKo: string
  nameEn: string
  imageSrc?: string
  description: string
  accords: string[]
  isBookmarked: boolean
  saveCount: number
  profile: {
    overallIntensity: number
    metrics: ProfileMetric[]
  }
  notes: {
    top: string[]
    middle: string[]
    base: string[]
  }
  tags: string[]
  seasons: string[]
  recommendedPlaces: RecommendedPlace[]
  similarScents: SimilarScent[]
}
