import type { PProps } from "@/shared/types"
import clsx from "clsx"

const LabeledTitle = (props: PProps) => {
  const { className, children, ...rest } = props

  return (
    <p {...rest} className={clsx("text-lg font-medium", className)}>
      {children}
    </p>
  )
}

export default LabeledTitle
