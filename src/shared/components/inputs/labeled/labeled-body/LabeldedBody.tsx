import { Hstack } from "@/shared/components/layouts"
import type { ReactNode } from "react"

type LabeldedBodyProps = {
  children: ReactNode
}
const LabeledBody = ({ children }: LabeldedBodyProps) => {
  return <Hstack gap="sm">{children}</Hstack>
}

export default LabeledBody
