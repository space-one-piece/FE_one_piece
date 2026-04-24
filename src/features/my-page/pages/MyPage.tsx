import { Button, CenterContainer, Container } from "@/shared/components"
import LoadingState from "@/shared/components/loading-state/LoadingState"

import useAuthStore from "@/shared/api/use-auth-store"
import { useNavigate } from "@tanstack/react-router"
import { LogOutIcon } from "lucide-react"
import { useUserProfile } from "../hooks/useUserProfile"
import TabSection from "./tab-section/TabSection"
import UserSection from "./user-section/UserSection"

export default function MyPage() {
  const { data: user, isLoading, error } = useUserProfile()
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)

  const handleLogout = () => {
    logout()
    navigate({ to: "/" })
  }

  return (
    <CenterContainer className="min-h-screen w-full py-2xl">
      <Container
        width="xl"
        isPadded
        className="flex min-h-screen max-w-container-xl flex-col bg-surface-default"
      >
        {isLoading ? <LoadingState /> : null}
        {!isLoading && error ? <div>유저 정보를 불러오지 못했어요.</div> : null}
        {!isLoading && !error && user ? <UserSection user={user} /> : null}

        <TabSection />

        <Button
          style="ghost"
          size="sm"
          onClick={handleLogout}
          className="mt-auto self-end text-text-sub text-sm"
        >
          <LogOutIcon size={16} />
          로그아웃
        </Button>
      </Container>
    </CenterContainer>
  )
}
