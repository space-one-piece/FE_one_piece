import {
  BackButton,
  Button,
  Container,
  PageIntro,
  Vstack,
} from "@/shared/components"
import PhotoTipsSection from "./photo-tips-section/PhotoTipsSection"
import PhotoUploadSection from "./photo-upload-section/PhotoUploadSection"

const ScentPhoto = () => {
  return (
    <Container className="px-10 pt-16 pb-20 md:px-30 md:pt-16 md:pb-40">
      <Vstack className="gap-md md:gap-xl">
        <PageIntro
          title="사진을 분석하여 향기를 찾습니다"
          description="이미지를 업로드하거나 직접 촬영하면 AI가 최적의 향기를 매칭합니다."
          backButton={<BackButton />}
        />
        <PhotoUploadSection />
        <PhotoTipsSection />
        <Button>이미지 분석하기</Button>
      </Vstack>
    </Container>
  )
}

export default ScentPhoto
