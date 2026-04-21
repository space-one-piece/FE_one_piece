import { CenterContainer, Container, Vstack } from "@/shared/components"

import { useSearch } from "@tanstack/react-router"
import { fragranceDetailMock } from "../mocks/fragranceDetail.mock"

import BottomCard from "./sections/bottom-section/BottomCard"
import NoteCard from "./sections/note-section/NoteCard"
import ProfileCard from "./sections/profile-section/ProfileCard"
import TopCard from "./sections/top-section/TopCard"

const ScentDetail = () => {
  const { id } = useSearch({ from: "/_wide/scent-detail" })
  const scent = fragranceDetailMock.find((item) => item.id === id)

  if (!scent) {
    return <div>해당 향기 정보를 찾을 수 없습니다.</div>
  }

  return (
    <CenterContainer className="w-full py-2xl">
      <Container
        width="xl"
        isPadded
        className="min-h-screen max-w-container-xl bg-surface-default"
      >
        <Vstack className="mx-2xl">
          <TopCard data={scent} />
          <ProfileCard profile={scent.profile} />
          <NoteCard
            notes={scent.notes}
            tags={scent.tags}
            seasons={scent.seasons}
          />
          <BottomCard
            recommendedPlaces={scent.recommendedPlaces}
            similarScents={scent.similarScents}
          />
        </Vstack>
      </Container>
    </CenterContainer>
  )
}

export default ScentDetail
