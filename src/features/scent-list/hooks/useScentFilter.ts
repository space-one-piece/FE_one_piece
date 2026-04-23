import { useMemo, useState } from "react"

import type { ScentFilterItem } from "@/shared/constants/scent-filter"
import type { ScentCardItem } from "../types/scent-card.type"

export const useScentFilter = (initialData: ScentCardItem[]) => {
  const [selectedItems, setSelectedItems] = useState<ScentFilterItem[]>([])

  const safeData = Array.isArray(initialData) ? initialData : []

  const toggleItem = (item: ScentFilterItem) => {
    setSelectedItems((prev) => {
      const isSelected = prev.some((v) => v.id === item.id)

      if (isSelected) {
        return prev.filter((v) => v.id !== item.id)
      }

      return [...prev, item]
    })
  }

  const clearAll = () => {
    setSelectedItems([])
  }

  const filteredItems = useMemo(() => {
    if (selectedItems.length === 0) return safeData

    return safeData.filter((card) =>
      selectedItems.every((selected) => card.tags.includes(selected.name))
    )
  }, [selectedItems, safeData])

  return {
    selectedItems,
    toggleItem,
    clearAll,
    filteredItems,
  }
}
