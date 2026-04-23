export type ScentApiItem = {
  id: number
  name: string
  eng_name: string
  tags: string[]
  description: string
  thumbnail_url: string
}

export type GetScentsResponse = {
  status: "success"
  data: ScentApiItem[]
}
