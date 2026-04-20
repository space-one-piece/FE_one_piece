import type { ReviewResult } from "@/shared/types/api/api.type"

export const MainReviewMock: ReviewResult[] = [
  {
    created_at: "2026-04-20T08:59:21.488Z",
    id: 1,
    recommended_scent: {
      id: 1,
      eng_name: "Herb",
      name: "허브",
      thumbnail_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLnnUC3BqaOII4VRXm1_-OiSia6erBPiYJlw&s",
    },
    type: "whatever",
  },
]
