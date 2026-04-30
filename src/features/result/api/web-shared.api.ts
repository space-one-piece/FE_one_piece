import { instance } from "@/shared/api/axios-instance"
import type { ResultType } from "@/shared/types"

type PostWebShareParams = {
  resultId: number
  type: ResultType
}

type PostWebShareRequest = {
  result_Id: number
}

type PostWebShareResponse = {
  web_share_url: string
}

export const postWebShare = async ({ resultId, type }: PostWebShareParams) => {
  const body: PostWebShareRequest = {
    result_Id: resultId,
  }

  const { data } = await instance.post<PostWebShareResponse>(
    `/${type}/web_share/${resultId}`,
    body
  )

  return data
}
