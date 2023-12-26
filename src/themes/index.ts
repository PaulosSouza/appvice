import { createConfig } from '@gluestack-ui/themed'
import { config as defaultConfig } from '@gluestack-ui/config'

export const defaultThemeConfig = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    fonts: {
      body: 'MontserratAlternates_400Regular',
      heading: 'MontserratAlternates_500Medium',
    },
  },
})
