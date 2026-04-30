import { instance } from "@/shared/api/axios-instance"

type PostWebShareParams = {
  resultId: number
}

type PostWebShareRequest = {
  result_Id: number
}

type PostWebShareResponse = {
  web_share_url: string
}

export const postWebShare = async ({ resultId }: PostWebShareParams) => {
  const body: PostWebShareRequest = {
    result_Id: resultId,
  }

  const { data } = await instance.post<PostWebShareResponse>(
    `/question/web_share/${resultId}`,
    body
  )

  return data
}
