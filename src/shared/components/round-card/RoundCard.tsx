import cn from "@/lib/utils"
import { RoundBox } from "@/shared/components"
import { cva } from "class-variance-authority"
import type { ReactNode } from "react"
import RoundCardImage from "./round-card-image/RoundCardImage"
import RoundCardTextGroup from "./round-card-text-group/RoundCardTextGroup"
import RoundCardText from "./round-card-text/RoundCardText"

const roundCardVariants = cva("bg-card overflow-hidden shadow-box flex", {
  variants: {
    direction: {
      horizontal: "",
      vertical: "flex-col items-start",
    },
  },
})
type RoundCardProps = {
  direction: "horizontal" | "vertical"
  children: ReactNode
  className?: string
}
const RoundCard = ({ direction, children, className }: RoundCardProps) => {
  return (
    <RoundBox
      padding="none"
      className={cn(roundCardVariants({ direction }), className)}
    >
      {children}
    </RoundBox>
  )
}
RoundCard.Image = RoundCardImage
RoundCard.Text = RoundCardText
RoundCard.TextGroup = RoundCardTextGroup

export default RoundCard
