import { useEffect, useState } from "react"

import { getHistoryList } from "../api/user.api"
import type { HistoryItem } from "../mocks/history.mock"

export const useHistoryList = () => {
  const [historyList, setHistoryList] = useState<HistoryItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchHistoryList = async () => {
      try {
        const data = await getHistoryList()
        setHistoryList(data)
      } catch (err) {
        console.error("기록 불러오기 실패")
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchHistoryList()
  }, [])

  return {
    historyList,
    isLoading,
    error,
  }
}
