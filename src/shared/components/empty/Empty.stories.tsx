import type { Meta, StoryObj } from "@storybook/react-vite"
import Empty from "./Empty"

const meta: Meta<typeof Empty> = {
  title: "Common/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Empty 컴포넌트는 콘텐츠가 없을 때 표시되는 플레이스홀더 UI입니다.

- avatar: 프로필 이미지가 없을 때 사용
- image: 일반 이미지가 없을 때 사용
- size props를 통해 크기를 조절할 수 있습니다.

사용 예시:

\`\`\`tsx
<Empty />
<Empty size="sm" />
<Empty type="avatar" size="lg" />
<Empty size="w-[200px] h-[200px]" />
<Empty size="w-40 h-40" />
\`\`\`
        `,
      },
    },
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
