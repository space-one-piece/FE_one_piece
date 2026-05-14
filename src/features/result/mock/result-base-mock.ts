import type { BaseAnalysisResult } from "@/shared/types"

// base-result.mock.ts
export const baseAnalysisResultMockData: Omit<
  BaseAnalysisResult,
  "id" | "type"
> = {
  ai_comment:
    "자연 속에서 잠시 쉬어가는 듯한 느낌을 주는 향으로, 공간을 편안하게 만들어줍니다.",
  match_score: 89,
  is_saved: false,
  created_at: "2026-04-22T05:21:47.289Z",
  review: null,
  rating: null,
  recommended_scent: {
    id: 21,
    name: "그린 포즈",
    eng_name: "Green Pause",
    description:
      "잠시 창문을 열고 식물의 숨을 들이마시는 순간을 닮은 향입니다. 생기 있지만 과하게 날카롭지 않아 공간에 자연스러운 여유를 만들어 줍니다.",
    categories: "green",
    tags: ["싱그러운", "자연스러운", "환기되는", "편안한"],
    keywords: ["플랜테리어", "산책", "싱그러움"],
    intensity: 61,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["그린 리프", "바질", "베르가못"],
        title: "탑 노트",
        description: "싱그럽게 열리는 초록빛 향",
      },
      middle: {
        items: ["무화과잎", "세이지", "갈바넘"],
        title: "미들 노트",
        description: "식물의 결이 살아 있는 향",
      },
      base: {
        items: ["시더우드", "머스크", "모스"],
        title: "베이스 노트",
        description: "자연스럽게 잔향을 남기는 향",
      },
    },
    profile: {
      depth: 43,
      warmth: 28,
      softness: 46,
      freshness: 79,
      sweetness: 17,
    },
    season: ["spring", "summer"],
    recommended_places: [
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        matchScore: 95,
        description: "식물이 많은 거실과 잘 어울리는 향",
      },
      {
        name: "Sunroom",
        imageUrl:
          "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
        matchScore: 92,
        description: "햇살과 초록빛이 머무는 공간",
      },
      {
        name: "Workspace",
        imageUrl:
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        matchScore: 88,
        description: "숨이 트이는 느낌을 주는 작업 공간",
      },
    ],
    similar_scents: [],
    thumbnail_url: "/public/mock-images/green-pause.jpg",
    created_at: "2026-04-22T05:21:47.289Z",
  },
}
