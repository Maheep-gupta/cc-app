import React from 'react'
import { Text,  View } from 'react-native'

function ChatOptions({ optionsName, msgCount, isSelected,newMsg }: { optionsName: String, msgCount: number, isSelected: boolean,newMsg:boolean }) {
    
    return (
        <View >
            <View className={`rounded-md flex   p-2  flex-row gap-x-1 justify-center items-center ${isSelected ?'bg-[#C4E1F6]':null }`}>
                {newMsg ?
                    <View className='text-xs bg-bgBlue  font-semibold flex justify-center items-center rounded-full h-1 w-1'>
                    </View> : null
                }
                <Text className={'text-[16px] capitalize'}>{optionsName}</Text>
                {/* <Text className={'text-xs'}>{msgCount}</Text> */}
            </View>
        </View>
    )
}

export default ChatOptions