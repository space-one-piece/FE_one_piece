import { Container, EmptyImage } from "@/shared/components"

import UserSection from "./user-section/UserSection"

const userProfile = {
  profileImage: <EmptyImage />,
  userName: "USER NAME",
  userId: "USER_ID",
  email: "example@user.com",
  gender: "여성",
  phone: "010-0000-0000",
  birthDate: "1999.01.01",
}

export default function MyPage() {
  return (
    <Container width="xl" className="border border-border">
      <UserSection user={userProfile} />
    </Container>
  )
}
