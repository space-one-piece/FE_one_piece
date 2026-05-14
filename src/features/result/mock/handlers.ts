import type { ResultType } from "@/shared/types"
import { http, HttpResponse } from "msw"
import { analysisResultStore } from "./result.store"

export const resultHandlers = [
  http.get("*/analyses/history/:resultId", ({ params, request }) => {
    const resultId = Number(params.resultId)

    const url = new URL(request.url)
    const type = url.searchParams.get("type") as ResultType | null

    const result = analysisResultStore.get(resultId)

    if (!type) {
      return HttpResponse.json(
        { message: "분석 타입이 없습니다." },
        { status: 400 }
      )
    }

    if (!result || result.type !== type) {
      return HttpResponse.json(
        { message: "분석 결과를 찾을 수 없습니다." },
        { status: 404 }
      )
    }

    return HttpResponse.json(result)
  }),
]
