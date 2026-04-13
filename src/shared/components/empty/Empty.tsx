import { cn } from "@/lib/utils"
import { Image as ImageIcon, UserRound } from "lucide-react"

type EmptyType = "avatar" | "image"
type EmptyPresetSize = "sm" | "md" | "lg"

export type EmptyProps = {
  type?: EmptyType
  size?: EmptyPresetSize
  width?: number
  height?: number
  iconSize?: number
  className?: string
}

const presetSizeMap = {
  avatar: {
    sm: { width: 80, height: 80, iconSize: 24 },
    md: { width: 124, height: 124, iconSize: 40 },
    lg: { width: 160, height: 160, iconSize: 48 },
  },
  image: {
    sm: { width: 100, height: 100, iconSize: 24 },
    md: { width: 138, height: 138, iconSize: 36 },
    lg: { width: 180, height: 180, iconSize: 48 },
  },
} as const

const Empty = ({
  type = "image",
  size = "md",
  width,
  height,
  iconSize,
  className,
}: EmptyProps) => {
  const isAvatar = type === "avatar"
  const preset = presetSizeMap[type][size]

  const resolvedWidth = width ?? preset.width
  const resolvedHeight = height ?? preset.height
  const resolvedIconSize = iconSize ?? preset.iconSize

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center justify-center border border-border",
          isAvatar
            ? "rounded-full bg-white shadow-md"
            : "rounded-lg bg-primary-disabled"
        )}
        style={{
          width: resolvedWidth,
          height: resolvedHeight,
        }}
      >
        {isAvatar ? (
          <UserRound
            className="text-text-primary"
            strokeWidth={2.2}
            style={{
              width: resolvedIconSize,
              height: resolvedIconSize,
            }}
          />
        ) : (
          <ImageIcon
            className="text-text-primary"
            strokeWidth={1.8}
            style={{
              width: resolvedIconSize,
              height: resolvedIconSize,
            }}
          />
        )}
      </div>
    </div>
  )
}

export default Empty
