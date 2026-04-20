import { CenterContainer, Container } from "@/shared/components"
import LoadingState from "@/shared/components/loading-state/LoadingState"
import { useUserProfile } from "../hooks/useUserProfile"
import TabSection from "./tab-section/TabSection"
import UserSection from "./user-section/UserSection"

export default function MyPage() {
  const { user, isLoading } = useUserProfile()

  return (
    <CenterContainer className="min-h-screen w-full py-2xl">
      <Container
        width="xl"
        isPadded
        className="min-h-screen max-w-container-xl bg-surface-default"
      >
        {isLoading || !user ? <LoadingState /> : <UserSection user={user} />}

        <TabSection />
      </Container>
    </CenterContainer>
  )
}
