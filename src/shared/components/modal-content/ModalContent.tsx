import cn from "@/lib/utils"
import type { DefaultButtonProps, DivProps } from "@/shared/types"
import type { ReactNode } from "react"
import { Button } from "../inputs"
import type { ButtonStyle } from "../inputs/Button/Button"
import { RoundBox } from "../layouts"

type ModalContentTitleProps = {
  children: string
}
const ModalContentTitle = ({ children }: ModalContentTitleProps) => {
  return <h1 className="text-lg font-bold">{children}</h1>
}
const ModalContentBody = (props: DivProps) => {
  const { children, className, ...rest } = props
  return (
    <div {...rest} className={cn("", className)}>
      {children}
    </div>
  )
}
type ModalContentButtonSectionProps = {
  children: ReactNode
}
const ModalContentButtonSection = ({
  children,
}: ModalContentButtonSectionProps) => {
  return <div>{children}</div>
}
type ModalButtonRole = "cancel" | "confirm" | "destruct"
type WithModalContentButtonProps = {
  role: ModalButtonRole
}

const ModalContentButton = ({
  role,
  ...props
}: Omit<DefaultButtonProps, "style" | "className"> &
  WithModalContentButtonProps) => {
  const { children, ...rest } = props
  const roleToButtonConfig: Record<
    ModalButtonRole,
    { style: ButtonStyle; className?: string }
  > = {
    cancel: { style: "outlined" },
    confirm: { style: "contained" },
    destruct: { style: "contained", className: "bg-status-error text-card" },
  }
  const buttonConfig = roleToButtonConfig[role]
  return (
    <Button {...rest} {...buttonConfig}>
      {children}
    </Button>
  )
}
type ModalContentProps = {
  children: ReactNode
}
const ModalContent = ({ children }: ModalContentProps) => {
  return <RoundBox>{children}</RoundBox>
}

ModalContent.Title = ModalContentTitle
ModalContent.Body = ModalContentBody
ModalContent.ButtonSection = ModalContentButtonSection
ModalContent.Button = ModalContentButton

export default ModalContent
