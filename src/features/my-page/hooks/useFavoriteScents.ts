import { useEffect, useState } from "react"
import { getFavoriteScents } from "../api/user.api"
import type { FavoriteScent } from "../types"

export const useFavoriteScents = () => {
  const [favoriteScents, setFavoriteScents] = useState<FavoriteScent[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchFavoriteScents = async () => {
      try {
        const data = await getFavoriteScents()
        setFavoriteScents(data)
      } catch (err) {
        console.error("저장된 향기 가져오기 실패")
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFavoriteScents()
  }, [])

  return {
    favoriteScents,
    isLoading,
    error,
  }
}
