import FeaturedEventCard from '@/components/Events/FeaturedEventCardSection'
import PopularEventCardSection from '@/components/Events/PopularEventCardSection'
import UserCard from '@/components/UserCard/UserCard'
import { Feather } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function Events() {
  const [category, setCategory] = useState("all");
  return (
    <SafeAreaView className='bg-white h-screen'>
      {/* <StatusBar barStyle={'dark-content'} backgroundColor={'white'} /> */}
      <View className='px-5 mt-6'>
        <UserCard username='Midoriya Deku' Avatar='' />
      </View>
      <ScrollView className='mt-2' contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
        <View className='px-5'>


          <View
            className='flex flex-row rounded-xl mt-5 h-14 bg-searchBg pt-1 px-2 pb-1 items-center justify-between text-white'>
            <TextInput
              className='text-[16px] flex-1 h-full  text-black capitalize '
              placeholderTextColor='#aaa'
              placeholder='What are You looking for?'
              keyboardAppearance='light' />
            <TouchableOpacity>

              <Feather name="search" size={24} color="black" />
            </TouchableOpacity>

          </View>

        </View>
        <View className='mt-4'>
          <View className='flex justify-between flex-row w-full px-5'>
            <Text className='text-xl font-bold'>Featured</Text>
            <Text className='text-xl text-bgBlue font-bold'>See All</Text>
          </View>
        </View>
        <ScrollView className='flex flex-row gap-x-5 p-5 ' horizontal={true} showsHorizontalScrollIndicator={false}>
          <FeaturedEventCard />
        </ScrollView>
        <View>
          <View className='mt-4'>
            <View className='flex justify-between flex-row w-full px-5'>
              <Text className='text-xl font-bold'>Popular</Text>
              <Text className='text-xl text-bgBlue font-bold'>See All</Text>
            </View>
          </View>
          <ScrollView className='flex flex-row gap-x-5 p-5 ' horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity activeOpacity={1} onPress={() => {
              setCategory("all")
            }} className={`p-2 border rounded-3xl w-24 border-bgBlue ${category === "all" ? "bg-bgBlue text-white" : null}`}>
              <Text className={`text-center text-lg ${category === "all" ? "text-white" : "text-black"}`}>✅ All</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => {
              setCategory("music")
            }} className={`p-2 border rounded-3xl w-24 border-bgBlue ${category === "music" ? "bg-bgBlue text-white" : null}`}>
              <Text className={`text-center text-lg ${category === "music" ? "text-white" : "text-black"}`}>🎵Music</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => {
              setCategory("art")
            }} className={`p-2 border rounded-3xl w-24 border-bgBlue ${category === "art" ? "bg-bgBlue text-white" : null}`}>
              <Text className={`text-center text-lg ${category === "art" ? "text-white" : "text-black"}`}>🎨Art</Text>
            </TouchableOpacity>
          </ScrollView>
          <PopularEventCardSection />
        </View>
      </ScrollView>


    </SafeAreaView>
  )
}

export default Events