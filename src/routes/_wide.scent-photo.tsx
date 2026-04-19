import ScentPhoto from "@/features/scent_photo/page/ScentPhoto"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/scent-photo")({
  component: ScentPhoto,
})
