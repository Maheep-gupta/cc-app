import { Image } from 'expo-image'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ResumeButton from './ResumeButton'
import { AntDesign } from '@expo/vector-icons'

function AcademicProfile() {
    return (
        <>


            <View className='flex-1  px-2 border border-gray-300 rounded-lg shadow-md'>
                <View className='flex flex-row justify-between px-4 items-center'>
                    <Text className="text-center font-bold text-lg pt-1">Personal details</Text>
                    <TouchableOpacity activeOpacity={0.8}>

                        <AntDesign name="edit" size={18} color="black" />
                    </TouchableOpacity>
                </View>
                <View className=''>

                    <Text className="text-sm pt-1">
                        <Text className="font-semibold">Department: </Text>
                        B.Tech CSE
                    </Text>
                    <Text className="text-sm pt-1">
                        <Text className="font-semibold">Email: </Text>
                        maheepgupta321@gmail.com
                    </Text>
                    <Text className="text-sm pt-1">
                        <Text className="font-semibold">Mob No: </Text>
                        +91 7071910537
                    </Text>
                    <Text className="text-sm pt-1">
                        <Text className="font-semibold">DOB: </Text>
                        2004-07-13
                    </Text>
                    <View className="flex-row items-center pt-2">
                        <Text className="font-semibold">Resume: </Text>
                        <ResumeButton title='View' />
                    </View>
                </View>

            </View>
        </>
    )
}

export default AcademicProfile