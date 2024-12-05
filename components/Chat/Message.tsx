import { Feather } from '@expo/vector-icons';
import React from 'react'
import { Text, View } from 'react-native'

function Message({ msgContent = "No msg", msgSeen = false, msgDelivered = false, msgTime = "1:25AM", isSender = false }: { msgContent: string, msgSeen: boolean, msgDelivered: boolean, msgTime: string, isSender: boolean }) {
    console.log(msgSeen);

    return (
        <View className={` flex mt-1  ${isSender ? "items-end" : "items-start"}`}>
            <View className={` max-w-[50%] h-fit px-2 py-1 text-lg rounded-md ${isSender ? "bg-[#C4E1F6]" : "bg-bgBlue text-white"}`}>

                <Text className={` text-lg ${isSender ? "text-black" : " text-white"}`}>{msgContent}</Text>
            </View>
            {/* {
                isSender ?
                    <View>
                        {
                            msgSeen ? <View className='flex flex-row'>
                                <Feather name="check" size={10} color="pink" />
                                <Feather name="check" size={10} color="pink" />
                            </View> :
                                <Feather name="check" size={24} color="black" />

                        }
                    </View>
                    : null
            } */}
            <View>
                <Text className='text-[10px] uppercase'>{ msgTime}</Text>
            </View>
        </View>
    )
}

export default Message