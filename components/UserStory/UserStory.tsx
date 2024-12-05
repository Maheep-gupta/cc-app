import React from 'react'
import { Text, View } from 'react-native'
import { Image } from 'expo-image'
import { FontAwesome6 } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

function UserStory({ username, avatar, currentUser }: { username: String, avatar: String, currentUser: Boolean }) {
    const userData = { username, avatar, currentUser }={ username, avatar, currentUser };
    return (
        <TouchableOpacity activeOpacity={1}  className='user-Story flex-shrink-0 h-20 w-20 capitalize ml-1 mb-1' onPress={()=>{
            router.push({ pathname: '/storyScreen', params:userData as any });
        }}>

            <View className=' border-4 p-1 rounded-full border-bgBlue  '>
                <View className="relative">
                    <Image source={require("../../assets/images/storyAvatar.jpg")} className='h-full w-full rounded-full' />
                    {
                        currentUser ? <View className={`top-12 left-11 absolute h-6 w-6 rounded-full flex justify-center items-center bg-bgBlue text-white border-2 border-white`}>
                            <FontAwesome6 name="add" size={15 } color="white" />
                        </View> : null
                    }

                </View>
            </View>
            <View>

                <Text className='text-sm text-center text-black'>{username}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default UserStory