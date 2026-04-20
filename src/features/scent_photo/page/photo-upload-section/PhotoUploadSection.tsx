import { Hstack } from "@/shared/components"
import {
  useRef,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react"
import type { MobilePhotoStep } from "../../types/mobile-photo-step.types"
import PhotoActionButton from "../photo-action-button/PhotoActionButton"
import MobileCameraContent from "./mobile-camera-content/MobileCameraContent"
import UploadPreviewBox from "./upload-preview-box/UploadPreviewBox"

type PhotoUploadSectionProps = {
  step: MobilePhotoStep
  previewUrl: string
  setPreviewUrl: Dispatch<SetStateAction<string>>
  onStepChange: Dispatch<SetStateAction<MobilePhotoStep>>
}

const PhotoUploadSection = ({
  step,
  previewUrl,
  setPreviewUrl,
  onStepChange,
}: PhotoUploadSectionProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleOpenGallery = () => {
    fileInputRef.current?.click()
  }

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    const imageUrl = URL.createObjectURL(file)
    setPreviewUrl(imageUrl)
    onStepChange("preview")
  }

  const handleCaptureImage = (imageUrl: string) => {
    setPreviewUrl(imageUrl)
    onStepChange("preview")
  }

  return (
    <>
      <section className="hidden md:flex md:flex-col gap-lg">
        <UploadPreviewBox previewUrl={previewUrl} />
        <PhotoActionButton type="button" onClick={handleOpenGallery}>
          이미지 업로드
        </PhotoActionButton>
      </section>

      <section className="md:hidden">
        {step === "select" && (
          <div className="flex flex-col gap-lg">
            <UploadPreviewBox previewUrl={previewUrl} />
            <Hstack>
              <PhotoActionButton type="button" onClick={handleOpenGallery}>
                갤러리 열기
              </PhotoActionButton>
              <PhotoActionButton
                type="button"
                onClick={() => onStepChange("camera")}
              >
                카메라 열기
              </PhotoActionButton>
            </Hstack>
          </div>
        )}

        {step === "camera" && (
          <MobileCameraContent
            onCapture={handleCaptureImage}
            onClose={() => onStepChange("select")}
          />
        )}

        {step === "preview" && previewUrl && (
          <div className="flex flex-col gap-lg">
            <UploadPreviewBox previewUrl={previewUrl} />
            <Hstack>
              <PhotoActionButton type="button" onClick={handleOpenGallery}>
                다른 이미지 선택
              </PhotoActionButton>
              <PhotoActionButton
                type="button"
                onClick={() => onStepChange("camera")}
              >
                카메라로 다시 찍기
              </PhotoActionButton>
            </Hstack>
          </div>
        )}
      </section>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChangeImage}
      />
    </>
  )
}

export default PhotoUploadSection
