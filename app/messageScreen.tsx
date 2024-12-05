import React, { useState } from 'react'
import { Dimensions, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import ChatOptions from '@/components/chatOptions/ChatOptions'
import ChatList from '@/components/Chat/ChatList';
import communityData from "@/constants/CommunityData"
import friendData from "@/constants/friend"



function MessageScreen() {
  const [options, setOptions] = useState("friends")
  

  return (
    <SafeAreaView className='py-5 px-2 bg-white'>
      <StatusBar barStyle={'dark-content'} />
      <View className='flex flex-row items-center h-10 gap-x-2 mb-2'>

        <TouchableOpacity activeOpacity={1} className='bg- w-7 h-full  flex justify-center items-center rounded-lg' onPress={() => {
          router.canGoBack() ? router.back() : router.replace("/(tabs)/home")
        }} >
          <Ionicons name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <Text
          className='text-3xl font-bold flex justify-center items-center '>
          Messages
        </Text>
      </View>

      <ScrollView contentContainerStyle={{paddingBottom:(Dimensions.get('window').height)*0.125 }} className='scrollbar-hidden h-screen' showsVerticalScrollIndicator={false}>
        <View
          className=' flex flex-col gap-y-5 justify-center mt-2'>
          <View
            className='flex flex-row rounded-xl border pt-1 px-2 pb-1 items-center justify-between text-white'>
            <TextInput
              className='text-[16px] h-full flex-1 text-black '
              placeholderTextColor='#aaa'
              placeholder='Search'
              keyboardAppearance='light' />
            <TouchableOpacity>

              <Feather name="search" size={24} color="black" />
            </TouchableOpacity>

          </View>
          <View className='flex flex-row justify-around  pl-1'>
            <TouchableOpacity onPress={() => { setOptions("friends") }} activeOpacity={1}>

              <ChatOptions optionsName={"friends"} isSelected={options==="friends"} msgCount={1} key={"friends"} newMsg={true} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setOptions("community")}} >

              <ChatOptions optionsName={"Community"} isSelected={options==="community"} msgCount={1} key={"community"} newMsg={false} />
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{setOptions("requests")}} >
              <ChatOptions optionsName={"Requests"} isSelected={options==="requests"} msgCount={1} key={"request"} newMsg={false}  />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={{paddingBottom:20}} className='flex mt-2'>
            <ChatList data={options === "friends" ? friendData : options === "community" ? communityData : []} />
          </ScrollView>
        </View>


      </ScrollView>
    </SafeAreaView >
  )
}

export default MessageScreen