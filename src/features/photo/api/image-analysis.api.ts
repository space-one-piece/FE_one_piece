import { instance } from "@/shared/api/axios-instance"
import type {
  AnalyzeImageRequest,
  ImageAnalysisResult,
} from "../types/image-analysis.type"

export const postImageAnalysis = async ({ image_key }: AnalyzeImageRequest) => {
  const { data } = await instance.post<ImageAnalysisResult>("/analyses", {
    image_key,
  })

  return data
}
