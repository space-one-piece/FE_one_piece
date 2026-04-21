import { Tag } from "@/shared/components"
import NoteSectionCard from "@/shared/components/note-section/NoteSectionCard"
import type { FragranceDetailData } from "@/shared/types/scent-types/scent.type"
import { Sun, Tag as TagIcon } from "lucide-react"

type NoteCardProps = {
  notes: FragranceDetailData["notes"]
  tags: FragranceDetailData["tags"]
  seasons: FragranceDetailData["seasons"]
}

const NoteCard = ({ notes, tags, seasons }: NoteCardProps) => {
  const noteSections = [
    {
      labelEn: "TOP NOTES",
      labelKo: "탑 노트",
      description: "첫 인상을 결정하는 가벼운 향기",
      tags: notes.top,
    },
    {
      labelEn: "MIDDLE NOTES",
      labelKo: "미들 노트",
      description: "향의 중심을 이루는 핵심 향기",
      tags: notes.middle,
    },
    {
      labelEn: "BASE NOTE",
      labelKo: "베이스 노트",
      description: "오래 지속되는 깊은 여운",
      tags: notes.base,
    },
  ]

  return (
    <div className="mt-2xl flex flex-col items-center justify-center gap-lg">
      {/* text */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-md font-light">SCENT PYRAMID</div>
        <div className="text-lg font-bold">Note Composition</div>
      </div>

      {/* notes */}
      <div className="flex w-full flex-col gap-md">
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
      <div className="flex w-full justify-between gap-2xl px-2xl pt-2xl">
        {/* tags */}
        <div className="flex flex-1 flex-col gap-md">
          <div className="flex items-center gap-2 text-lg font-bold">
            <TagIcon size={16} />
            <span>Tags</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} size="sm" variant="soft" />
            ))}
          </div>
        </div>

        {/* seasons */}
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex items-center gap-2 text-lg font-bold">
            <Sun size={16} />
            <span>Season</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {seasons.map((season) => (
              <Tag key={season} label={season} size="sm" variant="selected" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteCard
