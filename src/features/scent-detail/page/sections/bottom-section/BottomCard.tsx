import { ArchiveCard } from "@/shared/components"
import type { FragranceDetailData } from "@/shared/types/scent-types/scent.type"

import PlaceCard from "./place-card/PlaceCard"

type BottomCardProps = {
  recommendedPlaces: FragranceDetailData["recommendedPlaces"]
  similarScents: FragranceDetailData["similarScents"]
}

const BottomCard = ({ recommendedPlaces, similarScents }: BottomCardProps) => {
  return (
    <div className="mt-2xl flex flex-col items-center justify-center gap-2xl">
      {/* 1. Recommend Place */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-md font-light">SPACE MATCH</div>
        <div className="text-lg font-bold">Recommended Places</div>
      </div>

      <div className="grid w-full grid-cols-2 gap-4">
        {recommendedPlaces.map((place) => (
          <PlaceCard
            key={place.id}
            imageSrc={place.imageSrc}
            title={place.name}
            description={place.description}
            matchRate={place.matchRate}
          />
        ))}
      </div>

      {/* 2. Similar Scents */}
      <div className="mt-2xl flex flex-col items-center justify-center">
        <div className="text-md font-light">EXPLORE MORE</div>
        <div className="text-lg font-bold">Similar Scents</div>
      </div>

      <div className="grid w-full grid-cols-3 gap-4">
        {similarScents.map((scent) => (
          <ArchiveCard
            key={scent.id}
            title={scent.name}
            imageAlt={scent.name}
            imageSrc={scent.imageSrc}
            tags={scent.tags}
            description={scent.description}
          />
        ))}
      </div>
    </div>
  )
}

export default BottomCard
