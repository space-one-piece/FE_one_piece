import type { FragranceDetailData } from "@/shared/types/scent-types/scent.type"

export const fragranceDetailMock: FragranceDetailData = {
  id: 1,
  category: "WOODY",
  nameKo: "블라썸 드림",
  nameEn: "Blossom Dream",
  imageSrc: "",
  description:
    "체리 블라썸과 머스크, 바닐라 향의 완벽한 조화. 로맨틱하고 여성스러운 분위기를 연출합니다.",
  accords: ["머스크", "파우더리", "플로럴", "우디", "포근한"],
  isBookmarked: true,
  saveCount: 128,

  profile: {
    overallIntensity: 60,
    metrics: [
      { label: "상쾌함", value: 21, leftText: "은은함", rightText: "산뜻함" },
      { label: "온기", value: 68, leftText: "차가움", rightText: "따뜻함" },
      {
        label: "부드러움",
        value: 48,
        leftText: "날카로움",
        rightText: "부드러움",
      },
      {
        label: "깊이감",
        value: 82,
        leftText: "가벼움",
        rightText: "깊이 깊음",
      },
      { label: "달콤함", value: 78, leftText: "드라이", rightText: "달콤함" },
    ],
  },

  notes: {
    top: ["베르가못", "체리 블라썸", "블랙커런트"],
    middle: ["화이트 로즈", "피오니", "파우더 머스크"],
    base: ["샌달우드", "머스크", "바닐라"],
  },

  tags: ["꽃향", "부드러운", "달콤한", "깨끗한", "차분한", "로맨틱"],
  seasons: ["가을", "겨울"],

  recommendedPlaces: [
    {
      id: 1,
      name: "Living Room",
      description: "가볍게 쉬어가는 따뜻한 오후의 공간",
      imageSrc: "/images/places/living-room.png",
      matchRate: 95,
    },
    {
      id: 2,
      name: "Bedroom",
      description: "포근하고 안정감 있는 무드",
      imageSrc: "/images/places/bedroom.png",
      matchRate: 92,
    },
    {
      id: 3,
      name: "Reading Room",
      description: "조용히 집중하기 좋은 공간",
      imageSrc: "/images/places/reading-room.png",
      matchRate: 89,
    },
    {
      id: 4,
      name: "Cafe Corner",
      description: "햇살이 드는 감성적인 자리",
      imageSrc: "/images/places/cafe-corner.png",
      matchRate: 87,
    },
  ],

  similarScents: [
    {
      id: 1,
      name: "소프트 머스크",
      imageSrc: "/images/similar/soft-musk.png",
      tags: ["우디", "머스크"],
      description: "은은한 머스크와 따뜻한 잔향이 특징인 향수",
    },
    {
      id: 2,
      name: "화이트 블룸",
      imageSrc: "/images/similar/white-bloom.png",
      tags: ["플로럴", "파우더리"],
      description: "부드러운 꽃향과 깨끗한 잔향이 조화로운 향수",
    },
    {
      id: 3,
      name: "베이지 페탈",
      imageSrc: "/images/similar/beige-petal.png",
      tags: ["머스크", "달콤한"],
      description: "포근하고 여성스러운 분위기의 플로럴 머스크",
    },
  ],
}
