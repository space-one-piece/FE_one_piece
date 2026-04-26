import { instance } from "@/shared/api/axios-instance"
import type {
  PostAnalysisUploadUrlRequest,
  PostAnalysisUploadUrlResponse,
} from "../types/analysis-upload-url.type"

export const postAnalysisUploadUrl = async ({
  file_name,
}: PostAnalysisUploadUrlRequest) => {
  const { data } = await instance.post<PostAnalysisUploadUrlResponse>(
    "/analyses/upload-url",
    {
      file_name,
    }
  )

  return data
}
