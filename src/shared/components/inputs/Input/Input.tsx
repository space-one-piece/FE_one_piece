import type { InputProps } from "@/shared/types"
import type { None } from "@/shared/types/commonPropsTypes/commonPropsTypes"
import { cva } from "class-variance-authority"
import clsx from "clsx"
import type { ReactNode } from "react"
import { Hstack } from "../../layouts"

const inputVariants = cva(
  "rounded-sm transition items-center outline flex-1 bg-card text-text-primary disabled:text-text-disabled",
  {
    variants: {
      status: {
        none: "",
        success: "outline-border-primary",
        error: "outline-border-toast-error",
      },
    },
  }
)

type WithInputProps = {
  status?: None | "success" | "error"
  trailingChild?: ReactNode
}
const Input = ({
  status = "none",
  trailingChild,
  ...props
}: InputProps & WithInputProps) => {
  const { className, disabled, ...rest } = props

  return (
    <Hstack>
      <Input
        {...rest}
        disabled={disabled}
        className={clsx(inputVariants({ status }), className)}
      />
      {trailingChild}
    </Hstack>
  )
}

export default Input
