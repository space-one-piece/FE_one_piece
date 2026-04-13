import type { DefaultButtonProps } from "@/shared/types"
import { cva } from "class-variance-authority"
import clsx from "clsx"
import type { ReactNode } from "react"

const buttonVariants = cva("", {
  variants: {
    size: {
      sm: "text-sm py-lg py-xl",
      lg: "text-md py-lg py-xl",
    },
    shape: {
      rectangle: "rounded-md",
      pill: "rounded-full",
    },
    isContained: {
      false: "border border-primary hover:border-primary-hover",
      true: "bg-primary hover:bg-primary text-text-button",
    },
    disabled: {
      false: "border border-primary-disabled text-primary-disabled",
      true: "cursor-pointer text-text-disabled",
    },
  },
})

type ButtonProps = {
  size?: "sm" | "lg"
  shape?: "rectangle" | "pill"
  isContained?: boolean
  disabled?: boolean
  children?: ReactNode
}
const Button = ({
  size = "sm",
  shape = "rectangle",
  isContained = true,
  disabled = false,
  children,
  ...props
}: DefaultButtonProps & ButtonProps) => {
  const { className, ...rest } = props
  return (
    <button
      {...rest}
      className={clsx(
        buttonVariants({ size, shape, isContained, disabled }),
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
