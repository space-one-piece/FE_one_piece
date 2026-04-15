import { Container, FlexOneContainer, Vstack } from "@/shared/components"
import { Outlet } from "@tanstack/react-router"

const WideLayout = () => {
  return (
    <Container>
      <FlexOneContainer isYScrollable>
        <Vstack gap="none">
          <Outlet />
        </Vstack>
      </FlexOneContainer>
    </Container>
  )
}

export default WideLayout
