import { Image } from 'expo-image'
import React from 'react'
import { Text, View } from 'react-native'

function UserCard({ username, Avatar }: { username: string, Avatar: string }) {
  const date = new Date();
  const currTime = date.getHours();
  let salutation = currTime<12?"good morning 👋":currTime==12?"good morning 👋":"good Evening 👋"
    
    return (
        <View className='flex flex-row items-center '>
        <View className='border rounded-full border-gray-500 p-[2px] h-12 w-12'>
          <Image source={{ uri: "https://ui-avatars.com/api/?name=Midoriya+DeKu&bold=true&background=random&uppercase=false" }} className='rounded-full h-full w-full' />
        </View>
        <View className='flex items-start pl-2'>
          <Text className='text-sm  text-black font-light capitalize'>{salutation}</Text>
          <Text className='text-lg font-normal text-black capitalize'>{username}</Text>
        </View>
      </View>
    )
}

export default UserCard