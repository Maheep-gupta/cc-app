// --jsx
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function RequirementProfile() {
    const skills = [
        "JavaScript",
        "React",
        "Node.js",
        "CSS",
        "HTML",
        "Python",
        "Java",
        "SQL",
        "Git",
        "Django",
        "Swift"
    ];
    return (
        <View className="border flex-1 px-2 border-gray-300 rounded-lg shadow-md">
            <View className='flex flex-row justify-between px-4 items-center'>
                <Text className="text-center font-bold text-lg pt-1">Your Top Skills</Text>
                <TouchableOpacity activeOpacity={0.8}>

                    <AntDesign name="edit" size={18} color="black" />
                </TouchableOpacity>
            </View>
            <View className="flex-row flex-wrap justify-start mt-2">
                {skills.map((skill, index) => (
                    <View key={index} className="bg-blue-200 rounded-full p-2 m-1">
                        <Text className="text-blue-800 text-sm">{skill}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

export default RequirementProfile;