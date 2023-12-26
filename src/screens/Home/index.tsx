import React, { useEffect, useState } from 'react'

import { Box, Center, Image, Text, VStack } from '@gluestack-ui/themed'

import { ChangeTheme } from '@components/ChangeTheme'

import { intervalInMinutes, getRandomAdvice } from './utils'
import { Icon, TouchableOpacity } from './styles'

export function Home() {
  const [advice, setAdvice] = useState<string>('')
  const [imagePath, setImagePath] = useState<string>('')

  function handleRandomAdvice() {
    const { advice, image } = getRandomAdvice()

    setAdvice(advice)
    setImagePath(image)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleRandomAdvice()
    }, intervalInMinutes)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    handleRandomAdvice()
  }, [])

  if (!advice || !imagePath) {
    return null
  }

  return (
    <VStack flex={1} $light-bg="$warning50" $dark-bg="#0f0f0f" px="$6">
      <ChangeTheme />

      <Center flex={1}>
        <Image
          source={imagePath}
          width={188}
          height={188}
          $dark-tintColor="white"
          $light-tintColor="black"
          resizeMode="cover"
          alt="Imagem"
          mb={40}
        />

        <Text
          fontFamily="$body"
          $dark-color="$trueGray300"
          $light-color="$warmGray900"
          size="lg"
          textAlign="center"
        >
          {advice}
        </Text>
      </Center>

      <TouchableOpacity
        onPress={handleRandomAdvice}
        justifyContent="center"
        alignItems="center"
        mb="$8"
      >
        <Box
          $dark-bg="$backgroundDark100"
          $light-bg="$light400"
          p="$7"
          position="relative"
          w="$4"
          h="$4"
          rounded="$full"
          justifyContent="center"
          alignItems="center"
        >
          <Icon
            name="arrow-right"
            w="$6"
            h="$6"
            size={24}
            $dark-color="$trueGray600"
            $light-color="$textDark0"
          />
        </Box>
      </TouchableOpacity>
    </VStack>
  )
}
