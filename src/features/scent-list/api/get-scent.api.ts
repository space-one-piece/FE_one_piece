import { instance } from "@/shared/api/axios-instance"
import type { ScentCardItem } from "../types/scent-card.type"
import type { GetScentsResponse } from "./scent-api.type"
import { mapScentApiToCard } from "./scent.mapper"

export const getScents = async (): Promise<ScentCardItem[]> => {
  const { data } = await instance.get<GetScentsResponse>("/scents")
  return data.data.map(mapScentApiToCard)
}
