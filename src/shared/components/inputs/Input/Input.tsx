import type { InputProps } from "@/shared/types"
import type { None } from "@/shared/types/commonPropsTypes/commonPropsTypes"
import { cva } from "class-variance-authority"
import clsx from "clsx"
// import type { ReactNode } from "react"
import type { ReactNode } from "react"
import { Hstack } from "../../layouts"

const inputVariants = cva(
  "p-lg rounded-sm transition items-center outline bg-card text-text-primary disabled:text-text-disabled",
  {
    variants: {
      status: {
        none: "outline-border",
        success: "outline-border-primary",
        error: "outline-(--toast-error-color)",
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

  console.log("---- rerendered")
  return (
    <Hstack className={clsx(inputVariants({ status }), className)}>
      <input
        {...rest}
        disabled={disabled}
        className="flex-1 border-0 px-3 py-2 outline-0"
      />
      {trailingChild}
    </Hstack>
  )
}

export default Input
