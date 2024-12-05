import { AntDesign, Feather, FontAwesome6, Fontisto, Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image'
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react'
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
// import { useFonts, _400Regular } from '@expo-google-fonts/';

function EventDetails() {
  const dataToShow = useLocalSearchParams();

  // const [fontsLoaded] = useFonts({
  //   _400Regular,
  // });



  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View className='relative mx-4 z-10'>

        <View className='w-full absolute top-10 flex flex-row justify-between'>
          <TouchableOpacity activeOpacity={1} className=' w-7 h-full  flex justify-center items-center rounded-lg' onPress={() => {
            router.canGoBack() ? router.back() : router.replace("/(tabs)/events")
          }} >
            <Ionicons name="chevron-back" size={30} color="white" />
          </TouchableOpacity>


          <View className='flex flex-row gap-x-4'>
            <TouchableOpacity activeOpacity={1} className=' w-7 h-full  flex justify-center items-center rounded-lg' onPress={() => {
              router.canGoBack() ? router.back() : router.replace("/(tabs)/home")
            }} >
              <FontAwesome6 name="bookmark" size={22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} className=' w-7 h-full  flex justify-center items-center rounded-lg' onPress={() => {
              router.canGoBack() ? router.back() : router.replace("/(tabs)/home")
            }} >
              <Feather name="send" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView className='h-screen' showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
        <View className='h-96'>
          <Image className='h-full' source={{ uri: dataToShow.eventImage as any }} />
        </View>
        <View className='p-5'>

          <View className=' border-b border-b-gray-400'>
            <Text className='text-3xl font- '>
              {dataToShow.eventName}
            </Text>
            <View className='flex flex-row pt-2 items-center gap-x-3 pb-5 '>
              <Text className='text-[16px] flex py-1 border-bgBlue text-bgBlue border    rounded-md px-3'>
                {dataToShow.eventCategory}
              </Text>
              <View className='flex flex-row items-center overflow-hidden'>

                <Image className="inline-block h-8 w-8 rounded-full text-white border-2 border-white object-cover object-center" source={{ uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" }} alt="" />
                <Image className="-ml-2 inline-block h-8 w-8 rounded-full text-white border-2 border-white object-cover object-center" source={{ uri: "https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" }} alt="" />
                <Image className="-ml-2 inline-block h-8 w-8 rounded-full text-white border-2 border-white object-cover object-center" source={{ uri: "https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" }} alt="" />
                <Image className="-ml-2 inline-block h-8 w-8 rounded-full text-white border-2 border-white object-cover object-center" source={{ uri: "https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" }} alt="" />
                <View className='flex flex-row items-center gap-x-1 ml-1'>
                  <Text className='text-[15px] '>10+ going</Text>
                  <AntDesign name="arrowright" size={18} color="black" />
                </View>
              </View>

            </View>

          </View>
          <View className=' border-b py-5 border-b-gray-400'>
            <View className='flex flex-row items-center gap-x-4'>
              {/* icon */}
              <View className='p- h-16 w-16 items-center rounded-full flex justify-center bg-gray-300'>
                <AntDesign name="calendar" size={30} color="#584CF4" />
              </View>
              {/* text */}
              <View>
                <Text className='font-semibold text-lg capitalize font-'>
                  monday December 24,2024
                </Text>
                <Text className='font-light text-sm capitalize'>
                  {dataToShow.eventTime}
                </Text>
              </View>
            </View>

            <View className='flex flex-row items-center mt-3 gap-x-4'>
              {/* icon */}
              <View className='p- h-16 w-16 items-center rounded-full flex justify-center bg-gray-300'>
                <FontAwesome6 name="location-dot" size={30} color="#584CF4" />
              </View>
              {/* text */}
              <View>
                <Text className='font-semibold text-lg capitalize font-'>
                  {dataToShow.eventLoc}
                </Text>
                <Text className='font-light text-sm uppercase'>
                  K.N.I.P.S.S
                </Text>
              </View>
            </View>

            <View className='flex flex-row items-center mt-3 gap-x-4'>
              {/* icon */}
              <View className='p- h-16 w-16 items-center rounded-full flex justify-center bg-gray-300'>
                <Fontisto name="ticket-alt" size={30} color="#584CF4" />
              </View>
              {/* text */}
              <View>
                <Text className='font-semibold text-lg font- '>
                  Entry is Free
                </Text>
                <Text className='font-light text-sm capitalize'>
                  Ticket Price doesn't work here
                </Text>
              </View>
            </View>
          </View>
          <View className='mt-5'>
            <Text className='text-3xl font- '>About the Event</Text>
          </View>
          <View>
            <Text className='text-lg mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, asperiores nostrum quisquam totam hic ex corporis corrupti rem sunt soluta, reprehenderit nisi consequatur a ipsa fugiat ipsum voluptatibus animi debitis!
              <Text className='text-bgBlue text-lg'> ...Read More</Text>

            </Text>
          </View>


          <TouchableOpacity activeOpacity={1} className='flex flex-row items-center my-3'>
            <View className='border rounded-full border-gray-500 p-[2px] h-16 w-16'>
              <Image source={{ uri: dataToShow.eventImage as any }} className='rounded-full h-full w-full' />
            </View>
            <View className='flex pl-2'>
              <Text className='text-xl font-bold text-black capitalize'>Midoriya Deku</Text>
              <Text className='text-[16px]  text-black font-light capitalize'>Organizer</Text>
            </View>
          </TouchableOpacity>
        </View>



      </ScrollView>
      <View className='relative bg-white'>
        <View className='absolute z-10 bottom-0 w-full bg-white flex justify-center items-center py-3 px-5'>
          <TouchableOpacity className='w-full' activeOpacity={1}>

            <Text className='text-white text-center w-full bg-bgBlue text-xl p-3 rounded-full'>Book Your Seat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default EventDetails