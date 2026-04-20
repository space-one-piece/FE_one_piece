import ScentChat from "@/features/find-scent/chat/page/ScentChat"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/find-scent/chat")({
  component: ScentChat,
})
