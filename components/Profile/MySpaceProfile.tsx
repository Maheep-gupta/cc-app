import { Image } from 'expo-image'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import ResumeButton from './ResumeButton'
function MySpaceProfile() {
    const [followersCount, setFollowersCount] = useState(20)
    const [followingCount, setFollowingCount] = useState(100)
    const [postsCount, setPostsCount] = useState(5)
    return (
        <>
            <View className=' px-2 border flex-1 border-gray-300 rounded-lg shadow-md'>
                <View className="flex-row items-center flex-1  justify-between">
                <View className="items-center">
                        <Text className="text-xl font-bold">{postsCount}</Text>
                        <Text className="text-gray-500 text-lg">Posts</Text>
                    </View>
                    <View className="items-center">
                        <Text className="text-xl font-bold">{followersCount}</Text>
                        <Text className="text-gray-500 text-lg">Followers</Text>
                    </View>
                    <View className="items-center">
                        <Text className="text-xl font-bold">{followingCount}</Text>
                        <Text className="text-gray-500 text-lg">Following</Text>
                    </View>

                </View>
                <View className='flex-1 justify-center'>
                    <Text className='text-sm'>About me 1</Text>
                    <Text className='text-sm'>About me 2</Text>
                    <Text className='text-sm'>About me 3</Text>
                </View>
            </View>



        </>
    )
}

export default MySpaceProfile