import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Share } from 'react-native';
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler';

function FeedPost({ username, avatar }: { username: string; avatar: string; }) {
    const onDoubleTap = () => {
        // console.log('Double Tap Detected!');
        setIsLiked(true)
        if (!isLiked) {
            setLikeCount(likeCount + 1)
        }
    };
    const handleShare = async () => {
        try {
            await Share.share({
                message: "Hiiii"
            });
        } catch (error:any) {
            console.log('Error sharing:', error.message);
        }
    };
    const [likeCount, setLikeCount] = useState(30)
    const [isLiked, setIsLiked] = useState(false)
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View className='mb-4'>
                <View className='flex flex-row items-center justify-between p-2 bg-white'>
                    <View className='flex flex-row items-center'>
                        <View className='border rounded-full border-gray-500 p-[2px] h-10 w-10'>
                            <Image source={require("../../assets/images/storyAvatar.jpg")} className='rounded-full h-full w-full' />
                        </View>
                        <View className='flex items-start pl-1'>
                            <Text className='text-sm font-semibold text-black capitalize'>{username}</Text>
                        </View>
                    </View>
                    <Feather name="more-vertical" size={20} color="black" />
                </View>

                <TapGestureHandler onActivated={onDoubleTap} numberOfTaps={2}>
                    <View>
                        <Image source={require("../../assets/images/storyAvatar.jpg")} className='h-96 w-full' />
                    </View>
                </TapGestureHandler>

                <View className='flex flex-row items-center justify-between px-2 py-2'>
                    <View className='flex flex-row gap-x-2 items-center'>
                        <TouchableOpacity activeOpacity={1} onPress={() => {
                            setIsLiked(!isLiked)
                            if (!isLiked) {
                                setLikeCount(likeCount + 1)
                            } else {
                                setLikeCount(likeCount -1)
                                
                            }
                        }}>
                            <AntDesign name={isLiked?"heart":"hearto"} size={22} color={isLiked?"red":"black"} />
                            
                        </TouchableOpacity>
                        <Text className='text-[16px]'>{likeCount}</Text>

                        <TouchableOpacity activeOpacity={1}>
                            <FontAwesome5 name="comment" size={22} color="black" />
                        </TouchableOpacity>
                        <Text className='text-[16px]'>12</Text>

                        <TouchableOpacity activeOpacity={1} onPress={handleShare} >
                            <Feather name="send" size={22} color="black" />
                        </TouchableOpacity>
                        <Text className='text-[16px]'>5</Text>
                    </View>
                </View>

                <View className='px-2 flex flex-row gap-x-2'>
                    <Text className='text-sm font-semibold text-black capitalize'>{username}</Text>
                    <Text className='text-sm'>Caption</Text>
                </View>
            </View>
        </GestureHandlerRootView>
    );
}

export default FeedPost;