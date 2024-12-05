import React from 'react'
import { Text, View } from 'react-native'


function ProfileOptions({ optionName, isSelected }: { optionName: string, isSelected: boolean }) {
    return (
        <View >
            <View className={`rounded-md flex transition-all  p-1 py-2  flex-row gap-x-1 justify-center items-center ${isSelected ? 'bg-[#C4E1F6] border-b-2' : null}`}>
                <Text className={'text-[16px] capitalize font-semibold'}>{optionName}</Text>
            </View>
        </View>
    )
}

export default ProfileOptions