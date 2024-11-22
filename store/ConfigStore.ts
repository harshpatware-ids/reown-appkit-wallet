import { type Chain } from 'viem'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface IInstructionStore {
  enableEmail: boolean
  enableInjected: boolean
  enableEIP6963: boolean
  enableCoinbase: boolean
  chains: Chain[]
  setEnableEmail: (enable: boolean) => void
  setEnableInjected: (enable: boolean) => void
  setEnableEIP6963: (enable: boolean) => void
  setEnableCoinbase: (enable: boolean) => void
  setChains: (chains: Chain[]) => void
}

export const useConfig: () => IInstructionStore = create<IInstructionStore>()(
  persist(
    (    set: (arg0: { enableEmail?: any; enableInjected?: any; enableEIP6963?: any; enableCoinbase?: any; chains?: any }) => any) => ({
      enableEmail: false,
      enableInjected: false,
      enableEIP6963: false,
      enableCoinbase: false,
      chains: [],
      setEnableEmail: (enable: any) => set({ enableEmail: enable }),
      setEnableInjected: (enable: any) => set({ enableInjected: enable }),
      setEnableEIP6963: (enable: any) => set({ enableEIP6963: enable }),
      setEnableCoinbase: (enable: any) => set({ enableCoinbase: enable }),
      setChains: (chains: any) => set({ chains })
    }),
    {
      name: '__W3M::ConfigStore'
    }
  )
)
