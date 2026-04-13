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

### 타입
- avatar: 프로필 이미지가 없을 때 사용
- image: 일반 이미지가 없을 때 사용

### 사이즈 사용 방식
이 컴포넌트는 **preset + 커스텀 override 방식**을 지원합니다.

1. 기본 preset 사용
\`\`\`tsx
<Empty />
<Empty size="sm" />
<Empty type="avatar" size="lg" />
\`\`\`

2. 커스텀 사이즈 (숫자 기반)
\`\`\`tsx
<Empty width={260} height={260} />
<Empty type="avatar" width={96} height={96} />
\`\`\`

3. 아이콘 크기까지 커스터마이징
\`\`\`tsx
<Empty width={120} height={120} iconSize={32} />
\`\`\`

### 우선순위
- width / height / iconSize가 제공되면 preset보다 **우선 적용됩니다**

### 참고
- Tailwind class 기반 size 대신 **숫자 props를 사용하여 안정적으로 동작하도록 설계되었습니다**
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
