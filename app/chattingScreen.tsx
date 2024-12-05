import Message from '@/components/Chat/Message';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react'
import { Button, KeyboardAvoidingView, Platform, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

function ChattingScreen() {
  const [isSender, setIsSender] = useState(true);
  const dataToShow = useLocalSearchParams();


  return (
    <SafeAreaView className='flex-1'>
      <StatusBar barStyle={'dark-content'} backgroundColor={"white"} />
      <View className='flex flex-row items-center justify-between bg-white'>
        <View className='flex flex-row items-center  h-20 gap-x-2 mb-2'>
          <TouchableOpacity activeOpacity={1} className=' w-7 h-full  flex justify-center items-center rounded-lg' onPress={() => {
            router.canGoBack() ? router.back() : router.replace("/(tabs)/home")
          }} >
            <Ionicons name="chevron-back" size={30} color="black" />
          </TouchableOpacity>
          <View className='border rounded-full border-gray-500 p-[2px] h-10 w-10'>
            <Image source={{ uri: dataToShow.Avatar as any }} className='rounded-full h-full w-full' />
          </View>
          <Text
            className='text-xl font-bold flex justify-center items-center '>
            {dataToShow.username}
          </Text>

        </View>
        <View className='mr-5'><AntDesign name="infocirlce" size={24} color="black" /></View>
      </View>
      <ScrollView className='mt-2 px-2' contentContainerStyle={{ paddingBottom: 60 }} showsVerticalScrollIndicator={false}
      >
        {/* Sender's text */}
        <Message msgContent='hi Mido !!' isSender={false} msgDelivered={true} msgSeen={true} msgTime='1:32 AM' />
        <Message msgContent='hi Mido !!' isSender={false} msgDelivered={true} msgSeen={true} msgTime='1:32 AM' />


        {/* User's Message */}
        <Message msgContent='hi !!!' isSender={true} msgDelivered={true} msgSeen={true} msgTime='1:32 AM' />



        {/* Convo */}
        <Message msgContent='Mai theek tu kaisa h ' isSender={false} msgDelivered={true} msgSeen={true} msgTime='1:33 AM' />
        <Message msgContent='Kab aa rhe Wapas' isSender={false} msgDelivered={true} msgSeen={true} msgTime='1:33 AM' />
        <Message msgContent='Aa rha jaldi very fast' isSender={true} msgDelivered={true} msgSeen={true} msgTime='1:33 AM' />
      </ScrollView>


      <KeyboardAvoidingView
        className='flex flex-row border border-gray-300 rounded-3xl absolute bottom-3 bg-white px-4 pt-1 pb-1 items-center justify-between text-white overflow-clip left-2 right-3 h-fit max-h-[25%]'>
        <View>
          {/* <TouchableOpacity className='w-6'>
            <Feather name="send" size={24} color="black" />
          </TouchableOpacity> */}
          <TextInput
            className='text-[16px] text-black max-w-[90%] min-w-[90%] w-full break-words'
            placeholderTextColor='#aaa'
            placeholder='Search'
            keyboardAppearance='light'
            multiline={true}
          />
        </View>
        <TouchableOpacity className='bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center '>
          <Feather name="send" size={20} color="black" />
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </SafeAreaView>

  )
}

export default ChattingScreen