import { plainInstance } from "@/shared/api/axios-instance"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

const useEmailVerification = (useFormReturns: ReturnType<typeof useForm>) => {
  const { watch, setError, clearErrors } = useFormReturns

  const {
    data: emailFirstData,
    mutate: emailFirstMutate,
    isPending: emailFirstIsPending,
  } = useMutation({
    mutationFn: async () => {
      const email = watch().email
      return await plainInstance.post(
        "https://fragmnt.pics/api/v1/accounts/verification/send-email",
        {
          email,
        }
      )
    },
    onSuccess: () => {
      clearErrors("email")
    },
    onError: (error) => {
      setError("email", {
        type: "custom",
        message: error.response.data.detail,
      })
    },
  })

  const {
    data: emailSecondData,
    mutate: emailSecondMutate,
    isPending: emailSecondIsPending,
  } = useMutation({
    mutationFn: async () => {
      const email = watch().email
      const email_token = watch().email_token
      return await plainInstance.post(
        "https://fragmnt.pics/api/v1/accounts/verification/verify-email",
        {
          email,
          code: email_token,
        }
      )
    },
    onSuccess: () => {
      clearErrors("email_token")
    },
    onError(error) {
      setError("email_token", {
        type: "custom",
        message: error.response.data.detail,
      })
    },
  })

  return {
    emailFirstData,
    emailFirstMutate,
    emailFirstIsPending,
    emailSecondData,
    emailSecondMutate,
    emailSecondIsPending,
  }
}

export default useEmailVerification
