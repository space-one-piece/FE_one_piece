// import type { DivProps, PProps } from "@/shared/types"
// import { cva } from "class-variance-authority"
// import clsx from "clsx"
// import type { ReactNode } from "react"
//
// const {
//   ComponentContextProvider: LabelContextProvider,
//   useComponentContext: useLabeledContext,
// } = createComponentContext()
//
// const LabeledHeader = (props: PProps) => {
//   const { className, children, ...rest } = props
//
//   const { isRequired } = useLabeledContext()
//
//   return (
//     <Hstack gap="xs">
//       <p {...rest} className={`${className} text-sm font-medium`}>
//         {children}
//       </p>
//       {isRequired && <p className="text-washed-red">*</p>}
//     </Hstack>
//   )
// }
//
// const labelFooterVariants = cva("text-my-sm", {
//   variants: {
//     isInDanger: {
//       false: "",
//       true: "text-washed-red",
//     },
//   },
// })
//
// const LabeledFooter = ({
//   className,
//   children,
// }: {
//   className?: string
//   children: ReactNode
// }) => {
//   const { isInDanger } = useLabeledContext()
//
//   return (
//     <p className={clsx(labelFooterVariants({ isInDanger }), className)}>
//       {children}
//     </p>
//   )
// }
//
// interface WithLabelGroupProps {
//   isError?: boolean
//   isRequired?: boolean
// }
// const Labeled = ({
//   isError = false,
//   isRequired = false,
//   ...props
// }: DivProps & WithLabelGroupProps) => {
//   const { children, ...rest } = props
//
//   return (
//     <LabeledContextProvider value={{ isInDanger: isError, isRequired }}>
//       <Vstack {...rest} gap="none">
//         {children}
//       </Vstack>
//     </LabeledContextProvider>
//   )
// }
//
// Labeled.Header = LabeledHeader
// Labeled.Footer = LabeledFooter
//
// export default Labeled
//
// import { createContext } from "react"
//
// interface LabeledContextProps {
//   isInDanger: boolean
//   isRequired: boolean
// }
//
// const LabeledContext = createContext<LabeledContextProps | null>(null)
//
// export default LabeledContext
//
// import { useContext } from "react"
// import { Hstack, type Vstack } from "../../layouts"
// import createComponentContext from "../../wrappers/create-component-context/create-component-context"
//
// const useLabeledContext = () => {
//   const context = useContext(LabeledContext)
//
//   if (!context) {
//     throw new Error("---- 콘텍스트가 없어요!")
//   }
//
//   return context
// }
//
// export default useLabeledContext
