import { CenterContainer, Container, Vstack } from "@/shared/components"
import NoteCard from "./sections/note-section/NoteCard"
import ProfileCard from "./sections/profile-section/ProfileCard"
import TopCard from "./sections/top-section/TopCard"

export default function ScentDetail() {
  return (
    <CenterContainer className="w-full py-2xl">
      <Container
        width="xl"
        isPadded
        className="min-h-screen max-w-container-xl bg-surface-default"
      >
        <Vstack className="mx-2xl">
          <TopCard />
          <ProfileCard />
          <NoteCard />
        </Vstack>
      </Container>
    </CenterContainer>
  )
}
