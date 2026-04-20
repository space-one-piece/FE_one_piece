import { findEmailHandlers } from "@/features/_narrow.find-email/mocks/handlers"
<<<<<<< HEAD
import { mainPageHandlers } from "@/features/_wide.index/mocks/main-page-handler"
=======
import { findPasswordHandlers } from "@/features/_narrow.find-password/mocks/handlers"
>>>>>>> 8f7a6e8 (feat: 비밀번호 변경 페이지 msw 세팅 (#145))
import { myPageHandlers } from "@/features/my-page/mocks/handlers"
import { http, HttpResponse } from "msw"

export const handlers = [
  // 기본 설정 핸들러 예시
  http.get("/api/hello", () => {
    return HttpResponse.json({ message: "Hello, world!", code: 200 })
  }),
  ...myPageHandlers,
  ...mainPageHandlers,

  ...findEmailHandlers,

  ...findPasswordHandlers,
]
