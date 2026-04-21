import { Tag } from "@/shared/components"
import NoteSectionCard from "@/shared/components/note-section/NoteSectionCard"
import { Sun, Tag as TagIcon } from "lucide-react"
import { fragranceDetailMock as data } from "../../../mocks/fragranceDetail.mock"

const NoteCard = () => {
  const note = data.notes
  const noteSections = [
    {
      labelEn: "TOP NOTES",
      labelKo: "탑 노트",
      description: "첫 인상을 결정하는 가벼운 향기",
      tags: note.top,
    },
    {
      labelEn: "MIDDLE NOTES",
      labelKo: "미들 노트",
      description: "향의 중심을 이루는 핵심 향기",
      tags: note.middle,
    },
    {
      labelEn: "BASE NOTE",
      labelKo: "베이스 노트",
      description: "오래 지속되는 깊은 여운",
      tags: note.base,
    },
  ]
  return (
    <div className="flex flex-col gap-lg mt-2xl items-center justify-center">
      {/* text */}
      <div className="flex flex-col  items-center justify-center">
        <div className="text-md font-light">SCENT PYRAMID</div>
        <div className="text-lg font-bold">Note Composition</div>
      </div>

      {/* notes */}
      <div className="flex flex-col gap-md w-full">
        {noteSections.map((section) => (
          <div
            key={section.labelEn}
            className="w-full rounded-lg border border-border bg-white p-lg"
          >
            <NoteSectionCard {...section} />
          </div>
        ))}
      </div>

      {/* bottom */}
      <div className="flex justify-between gap-6 px-4 py-6">
        {/* tags */}
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex items-center gap-2 font-semibold">
            <TagIcon size={16} />
            <span>Tags</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <Tag key={tag} label={tag} size="sm" variant="soft" />
            ))}
          </div>
        </div>
        {/* seasons */}
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex items-center gap-2 font-semibold">
            <Sun size={16} />
            <span>Season</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {data.seasons.map((season) => (
              <Tag key={season} label={season} size="sm" variant="selected" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteCard
