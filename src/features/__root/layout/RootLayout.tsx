import { FullScreen } from "@/shared/components"
import { Toaster } from "@/shared/components/toast"
import { Outlet } from "@tanstack/react-router"

// const selectImage = (pathname: string) => {
//   if (pathname.includes("auth")) return BgAuthSrc
//   if (pathname.includes("find-scent")) return BgFindScent
//   if (pathname.includes("")) return BgMypage
//   return BgMainSrc
// }

const RootLayout = () => {
  // const pathname = useLocation().pathname

  return (
    <FullScreen>
      <Outlet />
      <Toaster />
    </FullScreen>
  )
}

export default RootLayout
