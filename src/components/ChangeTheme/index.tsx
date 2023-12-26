import { TouchableOpacity } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'

import { Box, styled } from '@gluestack-ui/themed'
import { useThemeContext } from '@contexts/ThemeContext'

const Icon = styled(Ionicons, {})

export function ChangeTheme() {
  const { theme, toggleTheme } = useThemeContext()

  function handleToggleTheme() {
    const updatedTheme = theme === 'dark' ? 'light' : 'dark'

    toggleTheme(updatedTheme)
  }

  return (
    <TouchableOpacity onPress={handleToggleTheme}>
      <Box
        position="absolute"
        right={0}
        top="$12"
        w="$8"
        height="$8"
        justifyContent="center"
        alignItems="center"
        // bg="$white"
      >
        <Icon
          name={theme === 'light' ? 'sunny-outline' : 'sunny-sharp'}
          $dark-color="white"
          $light-color="black"
          size={32}
        />
      </Box>
    </TouchableOpacity>
  )
}
