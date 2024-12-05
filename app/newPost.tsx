import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function newPost() {
  return (
    <SafeAreaView>
      <View className='flex justify-center items-center'>
        <Text>New Post</Text>
      </View>
    </SafeAreaView>
  )
}

export default newPost