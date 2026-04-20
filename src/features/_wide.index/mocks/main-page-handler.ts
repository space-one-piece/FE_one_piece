import { http, HttpResponse } from "msw"

const BASE_URL = import.meta.env.VITE_BASE_URL

export const mainPageHandlers = [
  http.get(`${BASE_URL}/question/mood/results`, () => {
    return HttpResponse.json()
  }),
]
