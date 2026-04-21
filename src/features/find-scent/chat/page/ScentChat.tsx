import {
  CenterContainer,
  Container,
  RoundBox,
  Vstack,
} from "@/shared/components"
import { useState } from "react"
import { messages } from "../mocks/chat-mocks"
import type { ChatMessage } from "../types/message.types"
import ChatHeader from "./chat-header/ChatHeader"
import ChatInput from "./chat-input/ChatInput"
import ChatList from "./chat-list/ChatList"

const ScentChat = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(messages)

  const handleSendMessage = (text: string) => {
    const trimmedText = text.trim()

    if (!trimmedText) {
      return
    }

    const newMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      type: "text",
      text: trimmedText,
    }

    setChatMessages((prev) => [...prev, newMessage])
  }

  return (
    <Container>
      <CenterContainer className="p-16">
        <RoundBox
          className="bg-white border border-border w-full shadow-2xl h-160"
          padding="none"
        >
          <Vstack gap="none" className="h-full">
            <ChatHeader />
            <ChatList messages={chatMessages} />
            <ChatInput onSendMessage={handleSendMessage} />
          </Vstack>
        </RoundBox>
      </CenterContainer>
    </Container>
  )
}

export default ScentChat
