import { Feather, MaterialIcons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

function Chat({ username, recentMsg, notification, Avatar }: { username: string, recentMsg: string, notification: number, Avatar: string }) {
  const userData =
    { username,  Avatar } = { username, Avatar }

  return (
    <TouchableOpacity className='flex flex-row items-center justify-between p-2 rounded-xl border border-gray-300 my-1 ' onPress={() => {
      router.push({ pathname: '/chattingScreen', params: userData });
    }} >
      <View className='flex flex-row items-center'>
        <View className='border  rounded-full border-gray-500 p-[2px] h-12 w-12'>
          <Image source={{ uri: Avatar }} className='rounded-full h-full w-full' />
        </View>
        <View className='flex items-start pl-2'>
          <Text className='text-lg font-normal text-black capitalize'>{username}</Text>
          <Text className='text-sm  text-black font-light capitalize'>{recentMsg}</Text>
        </View>
      </View>
      <View>
        {
          notification === 0 ? null :

            <View className='text-xs bg-black  font-semibold flex justify-center items-center rounded-full h-5 w-5'>
              <Text className='text-white'>{notification}</Text>
            </View>}
      </View>
    </TouchableOpacity>
  )
}

export default Chat