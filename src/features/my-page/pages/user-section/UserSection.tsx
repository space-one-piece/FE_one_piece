import { CalendarDays, Mail, Pencil, Phone, UserRound } from "lucide-react"

import { cn } from "@/lib/utils"
import { EmptyImage } from "@/shared/components"
import type { UserProfile } from "../../types"
import UserCard from "./user-card/UserCard"

type UserSectionProps = {
  user: UserProfile
  onEdit?: () => void
  className?: string
}

export default function UserSection({
  user,
  onEdit,
  className,
}: UserSectionProps) {
  return (
    <section className={cn("w-full", className)}>
      <div className="flex flex-col items-center">
        {user.profileImageUrl ?? <EmptyImage />}

        <h2 className="mt-lg text-xl font-bold text-text-primary">
          {user.userName}
        </h2>

        <p className="mt-xs text-xs text-text-sub">@{user.userId}</p>
      </div>

      <div className="mt-xl flex items-center gap-xs">
        <span className="text-sm font-semibold text-text-primary">
          개인정보
        </span>

        {onEdit && (
          <button
            type="button"
            onClick={onEdit}
            className="flex items-center justify-center text-text-sub transition-opacity hover:opacity-70"
            aria-label="개인정보 수정"
          >
            <Pencil size={14} strokeWidth={2} />
          </button>
        )}
      </div>

      <div className="mt-sm grid grid-cols-2 gap-sm">
        <UserCard
          label="이메일"
          value={user.email}
          icon={<Mail className="h-[18px] w-[18px]" strokeWidth={2} />}
        />
        <UserCard
          label="성별"
          value={user.gender}
          icon={<UserRound className="h-[18px] w-[18px]" strokeWidth={2} />}
        />
        <UserCard
          label="휴대폰 번호"
          value={user.phone}
          icon={<Phone className="h-[18px] w-[18px]" strokeWidth={2} />}
        />
        <UserCard
          label="생년월일"
          value={user.birthDate}
          icon={<CalendarDays className="h-[18px] w-[18px]" strokeWidth={2} />}
        />
      </div>
    </section>
  )
}
