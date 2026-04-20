import type { DivProps } from "@/shared/types"
import clsx from "clsx"
import { Vstack } from "../../layouts"

const RoundCardTextGroup = ({ className, children }: DivProps) => {
  return (
    <Vstack
      gap="sm"
      className={clsx("flex-1 p-xl w-full items-start", className)}
    >
      {children}
    </Vstack>
  )
}

export default RoundCardTextGroup
