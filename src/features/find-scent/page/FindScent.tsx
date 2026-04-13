import FeatureCard from "../components/feature-card/FeatureCard"

// Todo 이미지 경로 절대경로할지 어떻게 할지? 일단 이렇게둠
const featureCardList = [
  {
    id: 1,
    imageSrc: "/src/assets/images/find-scent/photo.jpg",
    title: "사진 기반 공간 분석",
    description:
      "사진 속 공간의 무드를 포착해\n분위기를 분석한 향기를 제안합니다",
  },
  {
    id: 2,
    imageSrc: "/src/assets/images/find-scent/chat.jpg",
    title: "대화 기반 취향 분석",
    description: "당신의 문장 사이에서\n오늘의 향기를 찾습니다",
  },
  {
    id: 3,
    imageSrc: "/src/assets/images/find-scent/servey.jpg",
    title: "키워드 기반 정밀 분석",
    description: "선호하는 분위기와 향 키워드를\n조합하여 향기를 찾습니다",
  },
]

const FindScent = () => {
  return (
    <div className="mx-auto flex w-[850px] gap-6 py-10">
      {featureCardList.map((card) => {
        return <FeatureCard key={card.id} {...card} />
      })}
    </div>
  )
}

export default FindScent
