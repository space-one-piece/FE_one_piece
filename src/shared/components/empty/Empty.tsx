import { cn } from "@/lib/utils"
import { Image as ImageIcon, UserRound } from "lucide-react"

type EmptyType = "avatar" | "image"
type EmptySize = "sm" | "md"

export type EmptyProps = {
  type?: EmptyType
  size?: EmptySize
  className?: string
}

const sizeStyle = {
  avatar: {
    sm: "h-[80px] w-[80px]",
    md: "h-[124px] w-[124px]",
  },
  image: {
    sm: "h-[100px] w-[100px]",
    md: "h-[138px] w-[138px]",
  },
}

const iconSize = {
  sm: "h-6 w-6",
  md: "h-9 w-9",
}

const Empty = ({ type = "image", size = "md", className }: EmptyProps) => {
  const isAvatar = type === "avatar"

  return (
    <div className={cn("flex items-center gap-10", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center justify-center border border-border",
          sizeStyle[type][size],
          isAvatar
            ? "rounded-full shadow-md bg-white"
            : "rounded-lg bg-disabled"
        )}
      >
        {isAvatar ? (
          <UserRound
            className={cn(iconSize[size], "text-text-primary")}
            strokeWidth={2.2}
          />
        ) : (
          <ImageIcon
            className={cn(iconSize[size], "text-text-primary")}
            strokeWidth={1.8}
          />
        )}
      </div>
    </div>
  )
}

export default Empty
