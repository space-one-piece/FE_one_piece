import { Hstack, Vstack } from "@/shared/components"
import { useLocation, useNavigate } from "@tanstack/react-router"
import clsx from "clsx"
import { Home, Scroll, Sparkles, User } from "lucide-react"

type NavigationPathname = "/" | "/list" | "/search" | "/my-page"
type LucideIconProps = typeof Home

type NavigationButtonConfig = {
  pathname: NavigationPathname
  label: string
  Icon: LucideIconProps
}

const navigationButtonConfigs: NavigationButtonConfig[] = [
  { pathname: "/", label: "Home", Icon: Home },
  { pathname: "/list", label: "Home", Icon: Scroll },
  { pathname: "/search", label: "Home", Icon: Sparkles },
  { pathname: "/my-page", label: "Home", Icon: User },
]

const NavigationButton = ({
  pathname,
  label,
  Icon,
}: NavigationButtonConfig) => {
  const currentPathname = useLocation({
    select: (location) => location.pathname,
  })
  const isSelected = currentPathname === pathname
  const navigate = useNavigate()
  return (
    <button>
      <Vstack gap="none">
        <Icon
          size={40}
          className={clsx(
            "rounded-md transition",
            isSelected ? "text-card bg-primary scale-120" : "text-primary"
          )}
          onClick={() => navigate({ to: pathname })}
        />
        <p>{label}</p>
      </Vstack>
    </button>
  )
}

const NavigationBar = () => {
  return (
    <Hstack className="justify-evenly">
      {navigationButtonConfigs.map((config) => (
        <NavigationButton {...config} />
      ))}
    </Hstack>
  )
}

export default NavigationBar
