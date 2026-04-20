import cn from "@/lib/utils"
import { cva } from "class-variance-authority"
import type { ReactNode } from "react"

const textVariants = cva("", {
  variants: {
    role: {
      title: "font-bold",
      subtitle: "",
      description: "text-text-sub text-sm",
    },
  },
})

type RoundCardTextProps = {
  role: "title" | "subtitle" | "description"
  children: ReactNode
  className?: string
}

const RoundCardText = ({ children, role, className }: RoundCardTextProps) => {
  return <p className={cn(textVariants({ role }), className)}>{children}</p>
}

export default RoundCardText
