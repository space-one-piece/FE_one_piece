import Feather from "@/assets/images/scent-list/Feather.svg"
import {
  CenterContainer,
  Container,
  FullScreen,
  Hstack,
  Vstack,
} from "@/shared/components"
import ScentFilterPanel from "./sections/tag-section/ScentFilterPanel"

export default function MyPage() {
  return (
    <FullScreen className="bg-surface-default">
      <CenterContainer className="w-full py-2xl">
        <Container
          width="xl"
          isPadded
          className="min-h-screen max-w-container-xl bg-surface-default"
        >
          <Vstack className="gap-xs pb-xl">
            <Hstack className="flex pt-lg">
              <h1 className="mb-lg text-xl font-bold text-text-primary">
                Scent Archive
              </h1>
              <img src={Feather} alt="Feather" className="ml-auto" />
            </Hstack>
            <p className="text-text-sub text-md items-center justify-center gap-xs flex">
              다양한 향기를 탐색하고 당신에게 맞는 향을 찾아보세요.
            </p>
          </Vstack>

          <ScentFilterPanel />
        </Container>
      </CenterContainer>
    </FullScreen>
  )
}
