import useSignupStore from "@/features/_narrow.signup/store/use-signup-store"
import { Modal } from "@/shared/components"
import ModalContent from "@/shared/components/modal-content/ModalContent"
import { ERROR_CODE_TO_MESSAGE } from "@/shared/constants/error-code-to-message"
import type { AxiosError } from "axios"

const parseErrorMessage = (error: AxiosError<{ code: string }>): string => {
  if (!error?.response?.data)
    throw new Error("---- 이 전에 에러 데이터를 가드해야 합니다")

  const errorCode = error.response.data.code
  const errorMessage = ERROR_CODE_TO_MESSAGE[errorCode]
  if (errorMessage) return errorMessage

  const detailKeyCandidates = Object.keys(error.response.data).filter((key) =>
    key.includes("detail")
  )
  if (detailKeyCandidates.length === 0) return "알 수 없는 오류가 발생했습니다"
  const detailKey = detailKeyCandidates[0]
  if (!detailKey) throw new Error("---- UNREACHABLE")

  const value = error.response.data[detailKey]
  if (typeof value === "string") return value
  if (Array.isArray(value)) return value[0]
  if (typeof value === "object" && value !== null)
    return Object.entries(value)[0][1] as string

  return "알 수 없는 오류가 발생했습니다"
}

const SignupErrorModal = () => {
  const modalKey = useSignupStore((state) => state.modalKey)
  const setModalKey = useSignupStore((state) => state.setModalKey)
  const signupError = useSignupStore((state) => state.signupError)

  const handleClick = () => setModalKey(null)

  if (!signupError?.response?.data) return null

  const errorMessage = parseErrorMessage(signupError)

  return (
    <Modal isOpen={modalKey === "error"} onClose={() => setModalKey(null)}>
      <ModalContent>
        <ModalContent.Title>
          회원 가입 중 오류가 발생했습니다
        </ModalContent.Title>
        <ModalContent.Body>{errorMessage}</ModalContent.Body>
        <ModalContent.ButtonSection>
          <ModalContent.Button
            type="button"
            onClick={handleClick}
            role="cancel"
          >
            닫기
          </ModalContent.Button>
        </ModalContent.ButtonSection>
      </ModalContent>
    </Modal>
  )
}

export default SignupErrorModal
