import React, { useState } from 'react'
import { ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { Redirect, router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
function login() {
    const [showPassword, setShowPassword] = useState(false);

    const [password, setPassword] = useState('');
    const [userID, setUserID] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);

    const handleChange = (input: string) => {
        const numericInput = input.replace(/[^0-9]/g, '');
        setUserID(numericInput);
    };
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (

        <SafeAreaView className='p-5'>
            <TouchableOpacity className='bg-black w-10 h-10 mt-5 flex justify-center items-center rounded-md' onPress={() => {
                router.back();
            }} >
                <Ionicons name="chevron-back" size={30} color="white" />

            </TouchableOpacity>
            <ScrollView >
                <Text
                    className='text-5xl font-bold mt-16 mb-8 '>
                    Login Your Account
                </Text>
                <View
                    className=' flex flex-col gap-4 justify-center'>
                    <View
                        className='flex flex-row rounded-xl pb-4 pt-1 items-center gap-3 bg-inputBg text-white'>
                        <AntDesign name="idcard" size={24} color="white" />
                        <TextInput
                            className='text-lg text-white '
                            placeholderTextColor='#aaa'
                            value={userID}
                            onChangeText={handleChange}
                            placeholder='Roll number or Teacher Id'
                            keyboardAppearance='light'
                            keyboardType="numeric" />
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
                    <View className='flex flex-row justify-between'>

                        <View className='flex flex-row items-center'>
                            <Switch className=' w-10 h-5 '
                                trackColor={{ false: '#767577', true: '#0677E8' }}
                                thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <Text className='text-[16px]'>Save Me</Text>

                        </View>
                        <TouchableOpacity onPress={() => {
                            router.replace("/forgetPassword")
                        }}>
                            <Text className='text-[16px] cursor-pointer'>Forget Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        className='flex flex-row rounded-xl py-4 items-center bg-button text-white justify-center'>
                        <Text className='text-white text-lg'>Login</Text>
                    </View>
                    <View className='flex flex-row gap-2 justify-center'>
                        <Text className=''>Create New Account ?</Text>
                        <TouchableOpacity onPress={() => {
                            router.push("/createAccount")
                        }} >
                            <Text className='text-button font-bold'>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default login