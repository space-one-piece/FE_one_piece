import { Send } from "lucide-react"

const ChatInput = () => {
  return (
    <section className="flex border-t border-border p-lg gap-md">
      <input
        type="text"
        className="w-full border border-border rounded-md bg-green-input px-lg"
        placeholder="메세지를 입력해주세요"
      />
      <button className="rounded-md flex justify-center items-center bg-primary w-11 h-10 text-white">
        <Send />
      </button>
    </section>
  )
}

export default ChatInput
