import type { ScentFilterCategory } from "@/shared/constants/scent-filter"

export type ScentCardItem = {
  id: number
  name: string
  description: string
  imageUrl: string
  tags: {
    category: ScentFilterCategory
    name: string
  }[]
}
