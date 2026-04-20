import type { ReviewResult } from "@/shared/types/api/api.type"

const scents = [
  { id: 1, name: "허브", eng_name: "Herb" },
  { id: 2, name: "시트러스", eng_name: "Citrus" },
  { id: 3, name: "우드", eng_name: "Wood" },
  { id: 4, name: "플로럴", eng_name: "Floral" },
  { id: 5, name: "프루트", eng_name: "Fruit" },
  { id: 6, name: "오리엔탈", eng_name: "Oriental" },
  { id: 7, name: "그린", eng_name: "Green" },
  { id: 8, name: "스파이시", eng_name: "Spicy" },
  { id: 9, name: "아쿠아", eng_name: "Aqua" },
  { id: 10, name: "머스크", eng_name: "Musk" },
]

const imgUrls = [
  "https://natyral-atc.com/cdn/shop/products/TussilagoFarfara_11.png?v=1671542936",
  "https://cdn.zyrosite.com/cdn-ecommerce/store_01HV0WWTEVMQZS3X5Q6B77ACH9%2Fassets%2F1724244446246-Rosemary_(Rosmarinus_officinalis)_2.jpg",
]

export const MainReviewMock: ReviewResult[] = Array.from(
  { length: 11 },
  (_, i) => {
    const scent = scents[i % scents.length]
    return {
      id: i + 1,
      created_at: new Date(Date.now() - i * 86400000).toISOString(),
      recommended_scent: {
        id: scent.id,
        name: scent.name,
        eng_name: scent.eng_name,
        thumbnail_url: imgUrls[i % imgUrls.length],
      },
      type: "whatever",
    }
  }
)
