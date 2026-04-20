import cn from "@/lib/utils"

type RoundCardImageProps = {
  src: string
  isPadded: boolean
  className?: string
}
const RoundCardImage = ({ src, className, isPadded }: RoundCardImageProps) => {
  return (
    <img src={src} className={cn("w-full", isPadded && "p-md", className)} />
  )
}

export default RoundCardImage
