export type RecommendedScent = {
  id: number
  name: string
  eng_name: string
  thumbnail_url: string
}

export type ReviewResult = {
  id: number
  recommended_scent: RecommendedScent
  type: string
  created_at: string
}
