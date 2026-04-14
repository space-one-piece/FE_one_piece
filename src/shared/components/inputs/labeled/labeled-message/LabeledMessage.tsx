import type { PProps } from "@/shared/types"
import clsx from "clsx"
import { useLabeledContext } from "../labeled-context/labeled-context"

type WithLabeledMessageProps = {
  withStar?: boolean
}
const LabeledMessage = ({
  withStar,
  ...props
}: PProps & WithLabeledMessageProps) => {
  const { children, className, ...rest } = props
  const { isError } = useLabeledContext()

  const resolvedChildren = withStar ? `* ${children}` : children

  return (
    <p
      {...rest}
      className={clsx(
        "text-sm text-text-sub",
        isError && "text-(--toast-error-color)",
        className
      )}
    >
      {resolvedChildren}
    </p>
  )
}

export default LabeledMessage
