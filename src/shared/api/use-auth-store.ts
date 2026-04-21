import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

type AuthStoreState = {
  accessToken: string | null
  setAccessToken: (accessToken: string | null) => void

  refreshToken: string | null
  setRefreshToken: (refreshToken: string | null) => void
}

const useAuthStore = create<AuthStoreState>()(
  persist(
    (set) => ({
      accessToken: null,
      setAccessToken: (accessToken) => set({ accessToken }),

      refreshToken: null,
      setRefreshToken: (refreshToken) => set({ refreshToken }),
    }),
    {
      name: "fragmnt store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    }
  )
)

export default useAuthStore
