import { useAppKitTheme } from '@reown/appkit/react'
const { themeMode, themeVariables, setThemeMode, setThemeVariables } = useAppKitTheme()

setThemeMode('dark')

setThemeVariables({
  '--w3m-color-mix': '#00BB7F',
  '--w3m-color-mix-strength': 40
})