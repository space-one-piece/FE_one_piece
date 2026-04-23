export type ScentCategory =
  | "floral"
  | "woody"
  | "citrus"
  | "musk"
  | "green"
  | "powdery"
  | "spicy"
  | "aquatic"
  | "fruity"
  | "amber"

export type ScentSeason = "spring" | "summer" | "autumn" | "winter"

export type ScentIntensityLabel = "약함" | "보통" | "강함"

export type ScentCardItem = {
  id: number
  name: string
  description: string
  imageUrl: string
  tags: string[]
  category:
    | "floral"
    | "woody"
    | "citrus"
    | "musk"
    | "green"
    | "powdery"
    | "spicy"
    | "aquatic"
    | "fruity"
    | "amber"
  season: ("spring" | "summer" | "autumn" | "winter")[]
  intensity: number
}
