import React, { useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import { router } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialCommunityIcons } from '@expo/vector-icons';
function createAccount() {
    const [showPassword, setShowPassword] = useState(false);

    const [password, setPassword] = useState('');
    const [userID, setUserID] = useState('');

    const handleChange = (input: string) => {
        const numericInput = input.replace(/[^0-9]/g, '');
        setUserID(numericInput);
    };
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (

        <SafeAreaView className='p-5'>
            <TouchableOpacity className='bg-black w-10 h-10 mt-5 flex justify-center items-center rounded-md' >
                <Ionicons name="chevron-back" size={30} color="white" />

            </TouchableOpacity>

            <ScrollView className='scrollbar-hidden'>
            <Text
                className='text-5xl font-bold mt-16 mb-8 '>
                Create Your Account
            </Text>


                <View
                    className=' flex flex-col gap-4 justify-center'>
                    <View
                        className='flex flex-row rounded-xl pb-4 pt-1 items-center gap-3 bg-inputBg text-white'>
                        <Feather name="user" size={24} color="white" />
                        <TextInput
                            className='text-lg text-white '
                            placeholderTextColor='#aaa'
                            placeholder='Full Name'
                            keyboardAppearance='light' />
                    </View>
                    <View
                        className='flex flex-row rounded-xl pb-4 pt-1 items-center gap-3 bg-inputBg text-white'>
                        <AntDesign name="idcard" size={24} color="white" />
                        <TextInput
                            className='text-lg text-white '
                            placeholderTextColor='#aaa'
                            placeholder='Roll number or Teacher Id'
                            keyboardAppearance='light'
                            value={userID}
                            onChangeText={handleChange}
                            keyboardType='numeric'
                        />

                    </View>
                    <View
                        className='flex flex-row rounded-xl pb-4 pt-1 items-center gap-3 bg-inputBg text-white'>
                        <Fontisto name="email" size={24} color="white" />
                        <TextInput
                            className='text-lg text-white '
                            placeholderTextColor='#aaa'
                            placeholder='Enter Your Email'
                            keyboardAppearance='light' />
                    </View>
                    <View className='flex flex-row justify-between pr-2 rounded-xl pt-2 items-center  gap-1 bg-inputBg text-white' >
                        <View className='flex flex-row gap-x-3 pb-4 pt-1'>

                            <Feather name="lock" size={24} color="white" />
                            <TextInput
                                className='text-lg text-white '
                                placeholder="Enter Password"
                                placeholderTextColor="#aaa"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
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
                    <View
                        className='flex flex-row rounded-xl py-4 items-center bg-button text-white justify-center'>
                        <Text className='text-white text-lg'>Register</Text>
                    </View>
                    <View className='flex flex-row gap-2 justify-center'>
                        <Text className=''>Already have an Account ?</Text>
                        <TouchableOpacity onPress={() => {
                            router.push("/login")
                        }} >
                            <Text className='text-button '>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView >
    )
}

export default createAccount