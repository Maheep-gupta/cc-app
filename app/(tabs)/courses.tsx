import UserCard from '@/components/UserCard/UserCard'
import React from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function newPost() {
  return (
    <SafeAreaView className='bg-white h-screen'>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View className='px-5 mt-6'>
        <View>
          <UserCard username='Midoriya Deku' Avatar='' />
  
        </View>
      </View>
      <ScrollView className='mt-2' contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
        <Text>Hello</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default newPost