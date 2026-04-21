import { StateBar } from "@/shared/components"
import type { FragranceDetailData } from "@/shared/types/scent-types/scent.type"

type ProfileCardProps = {
  profile: FragranceDetailData["profile"]
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  const metrics = profile.metrics

  return (
    <div className="mt-2xl flex flex-col items-center justify-center gap-lg">
      {/* text */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-md font-light">CHARACTER ANALYSES</div>
        <div className="text-lg font-bold">Scent Profile</div>
      </div>

      {/* top */}
      <div className="flex w-full items-center gap-sm rounded-lg border border-border bg-white p-md">
        <div>
          <p className="text-md font-bold text-text-primary">
            Overall Intensity
          </p>
          <p className="text-sm text-text-sub">향기의 지속력</p>
        </div>

        <div className="w-full">
          <StateBar
            height={10}
            leftText="은은한"
            rightText="강렬한"
            value={profile.overallIntensity}
          />
        </div>

        <div className="flex h-full items-center justify-center p-sm">
          <div className="flex size-button-lg items-center justify-center rounded-full bg-badge font-bold text-text-primary">
            {profile.overallIntensity}
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="w-full rounded-lg border border-border bg-white p-lg">
        <div className="grid grid-cols-2 gap-lg">
          {metrics.map((metric) => (
            <StateBar
              key={metric.label}
              label={metric.label}
              value={metric.value}
              leftText={metric.leftText}
              rightText={metric.rightText}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
