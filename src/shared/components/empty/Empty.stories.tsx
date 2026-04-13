import type { Meta, StoryObj } from "@storybook/react-vite"
import Empty from "./Empty"

const meta: Meta<typeof Empty> = {
  title: "Common/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Empty>

export const Avatar: Story = {
  args: {
    type: "avatar",
  },
}

export const Image: Story = {
  args: {
    type: "image",
  },
}
