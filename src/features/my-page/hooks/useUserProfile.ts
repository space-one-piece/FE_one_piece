import { useEffect, useState } from "react"
import { getMyProfile } from "../api/user.api"
import type { UserProfile } from "../types"

export const useUserProfile = () => {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getMyProfile()
        setUser(data)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [])

  return { user, isLoading, error }
}
