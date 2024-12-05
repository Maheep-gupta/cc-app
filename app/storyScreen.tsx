import { Feather, Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Dimensions, ScrollView, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native';

function StoryScreen() {
  const userData = useLocalSearchParams();
  console.log(userData);

  return (
    <>
      <View className='h-screen' >
        <View className=' absolute z-10 flex flex-row gap-x-2 h-7 justify-between pr-3 w-full' style={{ top: Dimensions.get("screen").height * 0.06 }}>
          <View className='flex flex-row gap-x-2 h-7'>
            <TouchableOpacity activeOpacity={1} className=' w-7 h-full  flex justify-center items-center rounded-lg' onPress={() => {
              router.canGoBack() ? router.back() : router.replace("/(tabs)/home")
            }} >
              <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>


            <View className='flex flex-row items-center'>
              <View className='border rounded-full border-gray-500 p-[2px] h-6 w-6'>
                <Image source={{ uri: userData.avatar as any }} className='rounded-full h-full w-full' />
              </View>
              <View className='flex items-start pl-2'>
                <Text className='text-[16px] font-normal text-black capitalize'>{userData.username}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity activeOpacity={1} className=' w-7 h-full  flex justify-center items-center rounded-lg' onPress={() => {
            router.canGoBack() ? router.back() : router.replace("/(tabs)/home")
          }} >
            <Ionicons name="close" size={30} color="black" />
          </TouchableOpacity>
        </View>




        <View className='flex-1 relative' style={{height:Dimensions.get("screen").height}}>

          <View className='h-full flex-1'>
            <Image className='h-full' source={{ uri: "https://imgs.search.brave.com/0a3I0a3b2LTrOhH-jwBGoVksaUx7_KHK29gXxROMbaw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGR1Rk/SVRzNzgvMS8wLzkw/MHcvY2FudmEtbGln/aHQtYnJvd24tc2Ny/YXBib29rLW1vbWVu/dHMteW91ci1zdG9y/eS1kRWVWbEk3czFS/WS5qcGc" }} />
            <View className='p-2'>

              {/* <View
              className='flex z-10 flex-row rounded-xl border pt-1 px-2 pb-1 items-center justify-between text-white'>
              <TextInput
                className='text-[16px] text-black '
                placeholderTextColor='#aaa'
                placeholder='Search'
                keyboardAppearance='light' />
              <TouchableOpacity>

                <Feather name="search" size={24} color="black" />
              </TouchableOpacity>

            </View> */}
            </View>
          </View>
        </View>


      </View >
    </>
  )
}

export default StoryScreen