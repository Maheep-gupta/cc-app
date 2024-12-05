import { FontAwesome6 } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
function EventCard({ eventName, eventLoc, eventTime, isFeatured, eventImage,eventCategory }: { eventName: string, eventLoc: string, eventTime: string, isFeatured: boolean, eventImage: any,eventCategory:string }) {
  
  const eventData = { eventName, eventLoc, eventTime,  eventImage,eventCategory } = { eventName, eventLoc, eventTime,  eventImage,eventCategory };
  
  
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => {
        router.push({ pathname: '/eventDetails', params: eventData });
      }} className={` bg-white ${isFeatured ? ' pl-4' : 'pl-2'} py-3 rounded-[50px]`}>
        <View className={` p-2 shadow-md shadow-black rounded-[50px]  bg-white ${isFeatured ? 'h-[330px] w-[270px] rounded-[30px]' : 'rounded-3xl h-[250px] w-[185px]'}`}>

          <Image className={` rounded-xl ${isFeatured ? 'h-1/2 rounded-[30px]' : 'rounded-3xl h-1/2'}`} source={{ uri: eventImage }} />
          <View className={` flex gap-y-2 mt-1 ${isFeatured ? ' px-3' : 'px-[6px]'}`}>
  
            <Text className={`font-semibold  ${isFeatured ? ' text-xl' : 'text-sm'}`}>{eventName}</Text>
            <Text className={`font-normal text-bgBlue ${isFeatured ? ' text-lg' : 'text-sm'}`}>{eventTime}</Text>
            <View className='flex flex-row justify-between items-center'>
  
              <View className={`flex flex-row items-center max-w-full ${isFeatured ? 'gap-x-3' : 'gap-x-1'}`}>
  
                <FontAwesome6 name="location-dot" size={isFeatured?24:16} color="#1B79E5" />
                <Text className={`font-light break-all ${isFeatured ? ' text-lg' : 'text-sm pr-2 '}`}>{eventLoc}</Text>
              </View>
              <FontAwesome6 name="bookmark" size={isFeatured?24:16} color="black" />
  
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
export default EventCard