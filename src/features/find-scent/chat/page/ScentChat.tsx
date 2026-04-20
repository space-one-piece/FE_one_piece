import {
  CenterContainer,
  Container,
  RoundBox,
  Vstack,
} from "@/shared/components"
import ChatHeader from "./chat-header/ChatHeader"
import ChatInput from "./chat-input/ChatInput"
import ChatList from "./chat-list/ChatList"
import RecommendationResult from "./recommendation-result/RecommendationResult"

const ScentChat = () => {
  return (
    <Container>
      <CenterContainer className="px-16 py-24">
        <RoundBox
          className="bg-white border border-border w-full shadow-2xl"
          padding="none"
        >
          <Vstack gap="none">
            <ChatHeader />
            <ChatList />
            <RecommendationResult />
            <ChatInput />
          </Vstack>
        </RoundBox>
      </CenterContainer>
    </Container>
  )
}

export default ScentChat
