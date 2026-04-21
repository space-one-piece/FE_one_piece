import { StateBar } from "@/shared/components"
import { fragranceDetailMock as data } from "../../../mocks/fragranceDetail.mock"

const ProfileCard = () => {
  const metrics = data.profile.metrics
  return (
    <div className="flex flex-col gap-lg mt-2xl items-center justify-center">
      {/* text */}
      <div className="flex flex-col  items-center justify-center">
        <div className="text-md font-light">CHARACTER ANALYSES</div>
        <div className="text-lg font-bold">Scent Profile</div>
      </div>
      {/* top */}
      <div className="w-full rounded-lg border border-border bg-white flex grid-cols-3 w-full items-center gap-sm p-md">
        <div className="">
          <p className="text-text-primary text-md font-bold">
            Overall Intensity
          </p>
          <p className="text-text-sub text-sm">향기의 지속력</p>
        </div>
        <div className="w-full">
          <StateBar
            height={10}
            leftText="은은한"
            rightText="강렬한"
            value={data.profile.overallIntensity}
          />
        </div>
        <div className="flex h-full items-center justify-center p-sm">
          <div className="flex items-center justify-center size-button-lg rounded-full bg-badge text-text-primary font-bold">
            {data.profile.overallIntensity}
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
