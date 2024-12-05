import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function search() {
  return (
    <SafeAreaView>
      <View className='flex justify-center items-center h-screen bg-white'>
        <Text>Search</Text>
      </View>
    </SafeAreaView>
  )
}

export default search