import { Hstack, Vstack } from "@/shared/components"
import { useLocation, useNavigate } from "@tanstack/react-router"
import clsx from "clsx"
import { Home } from "lucide-react"

const HomeButton = () => {
  const pathname = useLocation({
    select: (location) => location.pathname,
  })
  const isSelected = pathname === "/"
  const navigate = useNavigate()
  return (
    <button>
      <Vstack gap="none">
        <Home
          size={40}
          className={clsx(
            "rounded-md transition",
            isSelected ? "text-card bg-primary scale-120" : "text-primary"
          )}
          onClick={() => navigate({ to: "/" })}
        />
        <p>Home</p>
      </Vstack>
    </button>
  )
}

const NavigationBar = () => {
  const navigate = useNavigate()

  return (
    <Hstack className="justify-evenly">
      <HomeButton />
      <button onClick={() => navigate({ to: "/not-real" })}>
        move to not home
      </button>
    </Hstack>
  )
}

export default NavigationBar
