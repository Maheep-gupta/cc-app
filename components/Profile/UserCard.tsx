import { MaterialIcons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import React, { useState } from 'react'
import { Button, Modal, Pressable, SafeAreaView, Text, View } from 'react-native'
import ResumeButton from './ResumeButton'
import AcademicProfile from './AcademicProfile'
import MySpace from './MySpace'
import MySpaceProfile from './MySpaceProfile'
import CertificateProfile from './CertificateProfile'
import RequirementProfile from './RequirementProfile'

function UserCard({ optionChoosen }: { optionChoosen: string }) {
    return (
        <SafeAreaView className='px-2 py1 justify-center items-center flex flex-row h-44 mb-2'>
            <View className=''>

                <View className='h-28 w-28 border-2 rounded-full p-1 border-gray-400 flex justify-center items-center'>
                    <Image className='h-full w-full rounded-full' source={`https://ui-avatars.com/api/?name=Midoriya+Deku&bold=true&background=random&uppercase=false`}></Image>

                </View>
                <View className='flex justify-center items-center gap-y-1'>

                    <Text className='text-[16px] text-center+ font-semibold'>Maheep Gupta</Text>
                    <Text className='text-xs text-center border bg-gray-800 text-white rounded-full p-[2px] px-[5px]'>@ 2103820100026</Text>
                </View>
            </View>
            <View className="h-full flex-1 ml-2">
                {
                    optionChoosen === "academic" ? <AcademicProfile /> : optionChoosen === "my space" ? <MySpaceProfile /> : optionChoosen === "Certificate" ? <CertificateProfile /> : optionChoosen === "requirements" ? <RequirementProfile /> : null
                }
            </View>

        </SafeAreaView>
    )
}

export default UserCard