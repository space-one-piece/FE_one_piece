import { useMediaQuery } from "@/shared/utils/use-media-query"
import NarrowFooter from "./NarrowFooter"
import WideFooter from "./WideFooter"

const Footer = () => {
  const { isWide } = useMediaQuery()
  if (isWide) return <WideFooter />
  return <NarrowFooter />
}

export default Footer
