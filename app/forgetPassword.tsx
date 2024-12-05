import React, { useState } from 'react'
import { ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { Redirect, router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
function forgetPassword() {
    const [showPassword, setShowPassword] = useState(false);

    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (

        <SafeAreaView className='p-5'>
            <TouchableOpacity className='bg-black w-10 h-10 mt-5 flex justify-center items-center rounded-md' onPress={() => {
                router.replace("/login")
            }} >
                <Ionicons name="chevron-back" size={30} color="white" />

            </TouchableOpacity>
            <ScrollView >
                <Text
                    className='text-5xl font-bold mt-16 mb-8 '>
                    Reset Password
                </Text>
                <View
                    className=' flex flex-col gap-4 justify-center'>
                    <View className='flex flex-row justify-between pr-2 rounded-xl pt-2 items-center  gap-1 bg-inputBg text-white' >
                        <View className='flex flex-row gap-x-3 pb-4 pt-1'>

                            <Feather name="lock" size={24} color="white" />
                            <TextInput
                                className='text-lg text-white '
                                placeholder="Enter Password"
                                placeholderTextColor="#aaa"
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>



                    </View>
                    <View className='flex flex-row justify-between pr-2 rounded-xl pt-2 items-center  gap-1 bg-inputBg text-white' >
                        <View className='flex flex-row gap-x-3 pb-4 pt-1'>

                            <Feather name="lock" size={24} color="white" />
                            <TextInput
                                className='text-lg text-white '
                                placeholder="Confirm your Password"
                                placeholderTextColor="#aaa"
                                value={confirmpassword}
                                secureTextEntry={!showPassword}
                                onChangeText={setConfirmPassword}
                            />
                        </View>
                        <TouchableOpacity onPress={toggleShowPassword} className='pb-2 pr-2'>
                            <MaterialCommunityIcons
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={24}
                                color="white"

                            />
                        </TouchableOpacity>
                    </View>
                    <View className='flex flex-row justify-around'>

                        <View
                            className='flex flex-row rounded-xl py-2 px-2 items-center bg-button text-white justify-center'>
                            <Text className='text-white text-lg'>Reset</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            router.replace('/login')
                        }}>

                        <View
                            className='flex flex-row rounded-xl py-2 px-2 items-center text-black justify-center border'>
                            <Text className='text-black text-lg'>Cancel</Text>
                            </View>
                        </TouchableOpacity>
                            
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default forgetPassword