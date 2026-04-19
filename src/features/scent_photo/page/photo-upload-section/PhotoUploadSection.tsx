import cn from "@/lib/utils"
import { useRef, useState, type ChangeEvent } from "react"

const WebPhotoUploadContent = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [previewUrl, setPreviewUrl] = useState("")

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
  }

  return (
    <>
      <div
        className={cn(
          "w-full overflow-hidden rounded-xl bg-white",
          previewUrl
            ? "border border-transparent"
            : "aspect-[4/3] min-h-64 border-2 border-dashed border-primary"
        )}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="업로드한 미리보기 이미지"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-sm p-lg text-center">
            <h3 className="text-md font-bold text-text-primary">
              이미지를 드래그하거나
            </h3>
            <p className="text-sm text-text-description">
              아래 버튼을 눌러 업로드하세요
            </p>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={handleOpenGallery}
        className="mt-md w-full cursor-pointer hover:bg-green-input transition-all duration-200 ease-out rounded-md border border-border bg-white px-md py-sm text-sm font-medium text-text-primary"
      >
        이미지 업로드
      </button>

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

export default WebPhotoUploadContent
