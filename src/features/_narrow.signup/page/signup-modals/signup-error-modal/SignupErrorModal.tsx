import useSignupStore from "@/features/_narrow.signup/store/use-signup-store"
import { Modal } from "@/shared/components"
import ModalContent from "@/shared/components/modal-content/ModalContent"

const SignupErrorModal = () => {
  const modalKey = useSignupStore((state) => state.modalKey)
  const setModalKey = useSignupStore((state) => state.setModalKey)

  const handleClick = () => setModalKey(null)

  return (
    <Modal isOpen={modalKey === "error"} onClose={() => setModalKey(null)}>
      <ModalContent>
        <ModalContent.Title>
          회원 가입 중 오류가 발생했습니다
        </ModalContent.Title>
        <ModalContent.Body>잠시 후 다시 시도해주세요</ModalContent.Body>
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
