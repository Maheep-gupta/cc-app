import { Fontisto, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, Text } from 'react-native'

function ResumeButton({title}:{title:string}) {
    function update(){

    }
    function download(){

    }
    return (
        <Pressable className='bg-bgBlue p-1 px-2 ml-2 rounded-md flex flex-row justify-center items-center' onPress={()=>{
            
        }} >
            <Text className='text-white capitalize text-sm pr-1'>{title} </Text>
            <Fontisto name="preview" size={18} color="white" />
        </Pressable>
    )
}

export default ResumeButton