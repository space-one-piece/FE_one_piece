import { cn } from "@/lib/utils"
import { Image as ImageIcon, UserRound } from "lucide-react"

type EmptyType = "avatar" | "image"

export type EmptyProps = {
  type: EmptyType
  className?: string
}

// 기본값: image
const Empty = ({ type = "image", className }: EmptyProps) => {
  const isAvatar = type === "avatar"

  return (
    <div className={cn("flex items-center gap-10", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center justify-center border border-border",
          isAvatar
            ? "h-[124px] w-[124px] rounded-full shadow-md bg-white"
            : "h-[138px] w-[138px] rounded-lg bg-disabled"
        )}
        // TODO: 반응형 업데이트 필요
      >
        {isAvatar ? (
          <UserRound
            className="h-10 w-10 text-text-primary"
            strokeWidth={2.2}
          />
        ) : (
          <ImageIcon className="h-9 w-9 text-text-primary" strokeWidth={1.8} />
        )}
      </div>
    </div>
  )
}

export default Empty
