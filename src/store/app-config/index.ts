import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { AppState } from './types'

export const useAppConfig = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        language: 'es',
        setLanguage: (language: string) => set({ language }),
      }),
      // Devtools options
      { name: 'appConfig' }
    ),
    // Persist options
    {
      name: 'appConfig',
      // storage: createJSONStorage(() => sessionStorage)
    }
  )
)
