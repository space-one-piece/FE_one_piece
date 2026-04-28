import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { plainInstance } from "../api/axios-instance"

const useEmailVerification = (useFormReturns: ReturnType<typeof useForm>) => {
  const { watch, setError } = useFormReturns

  const {
    data: emailFirstData,
    error: emailFirstError,
    mutate: emailFirstMutate,
  } = useMutation({
    mutationFn: async () => {
      const email = watch().email
      await plainInstance.post(
        "https://fragmnt.pics/api/v1/accounts/verification/send-email",
        {
          email,
        }
      )
    },
    onError(error) {
      setError("email_token", {
        type: "custom",
        message: error.response.data.detail,
      })
    },
  })

  const {
    data: emailSecondData,
    error: emailSecondError,
    mutate: emailSecondMutate,
  } = useMutation({
    mutationFn: async () => {
      const email = watch().email
      const email_token = watch().email_token
      await plainInstance.post(
        "https://fragmnt.pics/api/v1/accounts/verification/verify-email",
        {
          email,
          code: email_token,
        }
      )
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
    emailFirstError,
    emailFirstMutate,
    emailSecondData,
    emailSecondError,
    emailSecondMutate,
  }
}

const usePhoneVerification = (useFormReturns: ReturnType<typeof useForm>) => {
  const { watch, setError } = useFormReturns
  const {
    data: phoneFirstData,
    error: phoneFirstError,
    mutate: phoneFirstMutate,
  } = useMutation({
    mutationFn: async () => {
      const phone_number = watch().phone_number
      await plainInstance.post(
        "https://fragmnt.pics/api/v1/accounts/verification/send-sms",
        {
          phone_number,
        }
      )
    },
    onError(error) {
      setError("phone_token", {
        type: "custom",
        message: error.response.data.detail,
      })
    },
  })

  const {
    data: phoneSecondData,
    error: phoneSecondError,
    mutate: phoneSecondMutate,
  } = useMutation({
    mutationFn: async () => {
      const phone_number = watch().phone_number
      const phone_token = watch().phone_token
      await plainInstance.post(
        "https://fragmnt.pics/api/v1/accounts/verification/verify-sms",
        {
          phone_number,
          code: phone_token,
        }
      )
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
    phoneFirstError,
    phoneFirstMutate,
    phoneSecondData,
    phoneSecondError,
    phoneSecondMutate,
  }
}

export { useEmailVerification, usePhoneVerification }
