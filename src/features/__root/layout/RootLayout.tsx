import BgMainSrc from "@/assets/images/root/bg.main.png"
import BgAuthSrc from "@/assets/images/root/placeholder.auth.png"
import BgFindScent from "@/assets/images/root/placeholder.findscent.png"
import BgMypage from "@/assets/images/root/placeholder.mypage.png"
import { Toaster } from "@/shared/components/toast"
import { Outlet, useLocation } from "@tanstack/react-router"

const selectImageSrc = (pathname: string) => {
  if (pathname.includes("auth")) return BgAuthSrc
  if (pathname.includes("find-scent")) return BgFindScent
  if (pathname.includes("my-page")) return BgMypage
  return BgMainSrc
}

const RootLayout = () => {
  const pathname = useLocation().pathname

  const imageSrc = selectImageSrc(pathname)

  return (
    <div className="size-screen overflow-hidden">
      <img
        src={imageSrc}
        alt="배경 이미지"
        className="-z-1 fixed inset-0 object-cover opacity-40"
      />

      <Outlet />
      <Toaster />
    </div>
  )
}

export default RootLayout
