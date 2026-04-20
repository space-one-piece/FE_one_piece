import { Funnel } from "lucide-react"
import { useMemo, useState } from "react"

import {
  scentFilterMockData,
  type ScentFilterItem,
} from "@/features/scent-list/mocks/scent-filter.mock"
import SelectedTagSection from "./SelectedTagSection"
import TagGroupSection from "./TagGroupSection"

const ScentFilterPanel = () => {
  const [selectedItems, setSelectedItems] = useState<ScentFilterItem[]>([])

  const selectedIds = useMemo(() => {
    return selectedItems.map((item) => item.id)
  }, [selectedItems])

  const handleToggleItem = (item: ScentFilterItem) => {
    const isSelected = selectedItems.some(
      (selectedItem) => selectedItem.id === item.id
    )

    if (isSelected) {
      setSelectedItems((prev) =>
        prev.filter((selectedItem) => selectedItem.id !== item.id)
      )
      return
    }

    setSelectedItems((prev) => [...prev, item])
  }

  const handleClearAll = () => {
    setSelectedItems([])
  }

  return (
    <section className="w-full rounded-2xl bg-white p-xl shadow-sm">
      <div className="flex items-center gap-xs pb-md">
        <Funnel size={16} className="text-primary" />
        <p className="text-sm font-semibold text-text-sub">EXPLORE BY</p>
      </div>

      <div className="grid grid-cols-2 gap-x-xl gap-y-xl">
        {scentFilterMockData.map((section) => (
          <TagGroupSection
            key={section.category}
            title={section.title}
            options={section.options}
            selectedIds={selectedIds}
            onToggle={(option) => {
              const selectedItem = section.options.find(
                (item) => item.id === option.id
              )

              if (selectedItem) {
                handleToggleItem(selectedItem)
              }
            }}
          />
        ))}
      </div>

      <div className="pt-sm">
        <SelectedTagSection
          items={selectedItems}
          onRemove={(item) => handleToggleItem(item as ScentFilterItem)}
          onClearAll={handleClearAll}
        />
      </div>
    </section>
  )
}

export default ScentFilterPanel
