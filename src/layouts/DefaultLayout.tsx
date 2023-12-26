import { defaultThemeConfig } from '@themes/index'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { useThemeContext } from '@contexts/ThemeContext'

import { Home } from '@screens/Home'

export function DefaultLayout() {
  const { theme } = useThemeContext()

  return (
    <GluestackUIProvider config={defaultThemeConfig} colorMode={theme}>
      <Home />
    </GluestackUIProvider>
  )
}
