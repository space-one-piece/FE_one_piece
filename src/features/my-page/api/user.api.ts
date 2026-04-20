import type { HistoryItem } from "../mocks/history.mock"
import type { FavoriteScent, UserProfile } from "../types"

const BASE_URL = import.meta.env.VITE_BASE_URL

export const getMyProfile = async (): Promise<UserProfile> => {
  const res = await fetch(`${BASE_URL}/accounts/me`)
  if (!res.ok) {
    console.log("BASE_URL", BASE_URL)
    throw new Error("유저 정보 요청 실패")
  }
  return res.json()
}

export const getFavoriteScents = async (): Promise<FavoriteScent[]> => {
  const res = await fetch(`${BASE_URL}/accounts/favorite-scents`)
  if (!res.ok) {
    console.log("BASE_URL", BASE_URL)
    throw new Error("저장된 향기 요청 실패")
  }
  return res.json()
}

export const getHistoryList = async (): Promise<HistoryItem[]> => {
  const res = await fetch(`${BASE_URL}/analyses/`)
  if (!res.ok) {
    console.log("BASE_URL", BASE_URL)
    throw new Error("히스토리 요청 실패")
  }
  return res.json()
}
