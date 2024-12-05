import UserCard from '@/components/Profile/UserCard'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Modal, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import QRCode from 'react-native-qrcode-svg';
import ProfileOptions from '@/components/Profile/ProfileOptions'
import AcademicPart from '@/components/Profile/AcademicPart'
import MySpace from '@/components/Profile/MySpace'
import Requirements from '@/components/Profile/Requirements'
import CertificatePart from '@/components/Profile/CertificatePart'

function profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const [optionChoosen, setOptionChoosen] = useState('my space');

  return (
    <SafeAreaView className=' bg-white pt-2'>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className='flex h-screen justify-center items-center bg-gray-600'>
          <View className='bg-gray-300  p-4 pt-0 rounded-3xl flex items-center'>
            <Text className='text-center text-lg font-semibold py-2 '>QR Code is only for attendance.</Text>
            <QRCode
              size={250}
              backgroundColor='#d1d5db'
              color='black'
              value="http://awesome.link.qr"
            />
            <Text className='text-center text-red-500 text-lg font-semibold pt-2 '><Text className='text-red-500'>*</Text>The code is valid for a day only.</Text>
            <Text className='text-center text-red-500 text-lg font-semibold pb-2 '>Code chnages the next day.</Text>
            <TouchableOpacity onPress={() => { setModalVisible(false) }}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
      <StatusBar barStyle={'dark-content'} />
      <View className='flex flex-row justify-between items-center px-2 py-2'>
        <View className='flex flex-row items-center h-10 gap-x-2 mb-2'>

          <TouchableOpacity activeOpacity={1} className='bg- w-7 h-full  flex justify-center items-center rounded-lg' onPress={() => {
            router.canGoBack() ? router.back() : router.replace("/(tabs)/home")
          }} >
            <Ionicons name="chevron-back" size={30} color="black" />
          </TouchableOpacity>
          <Text
            className='text-3xl font-bold flex justify-center items-center '>
            Profile
          </Text>
        </View>
        <View className='flex flex-row items-center gap-x-2 ' >
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <AntDesign name="qrcode" size={30} color="black" />
          </TouchableOpacity>
          <Feather name="menu" size={34} color="black" />
        </View>
      </View>
      <ScrollView>
        <UserCard optionChoosen={optionChoosen} />
        <View className='flex flex-row justify-between items-center my-3 mx-3'>
        <TouchableOpacity activeOpacity={1} onPress={() => {
            setOptionChoosen("my space")
          }}>

            <ProfileOptions optionName='My Space' isSelected={optionChoosen == "my space"} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => {
            setOptionChoosen("academic")
          }}>

            <ProfileOptions optionName='Academic' isSelected={optionChoosen == "academic"} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} onPress={() => {
            setOptionChoosen("requirements")
          }}>
            <ProfileOptions optionName='Requirements' isSelected={optionChoosen == "requirements"} />

          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => {
            setOptionChoosen("Certificate")
          }}>
            <ProfileOptions optionName='Certificates' isSelected={optionChoosen == "Certificate"} />

          </TouchableOpacity>
        </View>
        
        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingBottom:120}}>
          {
            optionChoosen === "academic" ? <AcademicPart /> : optionChoosen === "my space" ? <MySpace /> :optionChoosen === "requirements" ? <Requirements />:optionChoosen === "Certificate" ? <CertificatePart />: <Text>Socha Nhi kuch</Text>
          }
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default profile