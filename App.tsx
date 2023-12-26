import { View } from 'react-native'
import React, { useCallback } from 'react'

import {
  useFonts,
  MontserratAlternates_400Regular,
  MontserratAlternates_500Medium,
} from '@expo-google-fonts/montserrat-alternates'

import { DefaultLayout } from 'src/layouts/DefaultLayout'
import * as SplashScreen from 'expo-splash-screen'
import { ThemeProvider } from '@contexts/ThemeContext'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_400Regular,
    MontserratAlternates_500Medium,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <ThemeProvider>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <DefaultLayout />
      </View>
    </ThemeProvider>
  )
}
