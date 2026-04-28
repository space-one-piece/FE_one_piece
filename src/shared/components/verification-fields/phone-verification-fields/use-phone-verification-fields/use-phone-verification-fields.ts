import { plainInstance } from "@/shared/api/axios-instance"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

const usePhoneVerification = (useFormReturns: ReturnType<typeof useForm>) => {
  const { watch, setError, clearErrors } = useFormReturns
  const {
    data: phoneFirstData,
    mutate: phoneFirstMutate,
    isPending: phoneFirstIsPending,
  } = useMutation({
    mutationFn: async () => {
      const phone_number = watch().phone_number
      return await plainInstance.post(
        "https://fragmnt.pics/api/v1/accounts/verification/send-sms",
        {
          phone_number,
        }
      )
    },
    onSuccess: () => {
      clearErrors("phone_number")
    },
    onError(error) {
      setError("phone_number", {
        type: "custom",
        message: error.response.data.error_detail,
      })
    },
  })

  const {
    data: phoneSecondData,
    mutate: phoneSecondMutate,
    isPending: phoneSecondIsPending,
  } = useMutation({
    mutationFn: async () => {
      const phone_number = watch().phone_number
      const phone_token = watch().phone_token
      return await plainInstance.post(
        "https://fragmnt.pics/api/v1/accounts/verification/verify-sms",
        {
          phone_number,
          code: phone_token,
        }
      )
    },
    onSuccess: () => {
      clearErrors("phone_token")
    },
    onError(error) {
      setError("phone_token", {
        type: "custom",
        message: error.response.data.detail,
      })
    },
  })

  return {
    phoneFirstData,
    phoneFirstMutate,
    phoneFirstIsPending,
    phoneSecondData,
    phoneSecondMutate,
    phoneSecondIsPending,
  }
}

export default usePhoneVerification
