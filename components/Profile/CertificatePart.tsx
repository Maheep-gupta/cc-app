import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Certificates = () => {
    // Sample data for certificates
    const certificates = [
        {
            title: "Web Development Certification",
            issuer: "ABC Institute",
            date: "2023-01-15",
            description: "Completed a comprehensive course on web development."
        },
        {
            title: "Data Science Certification",
            issuer: "XYZ Academy",
            date: "2022-12-10",
            description: "Learned data analysis and machine learning techniques."
        },
        {
            title: "Mobile App Development",
            issuer: "Tech University",
            date: "2023-03-22",
            description: "Developed mobile applications using React Native."
        },
        {
            title: "Digital Marketing Certification",
            issuer: "Marketing Pro",
            date: "2022-11-05",
            description: "Gained skills in SEO, SEM, and social media marketing."
        },
        {
            title: "Graphic Design Certification",
            issuer: "Design School",
            date: "2023-02-18",
            description: "Learned graphic design principles and software."
        }
    ];

    return (
        <View className="flex-1 p-4 bg-white">
            <Text className="text-xl font-bold text-center mb-4">Certificates</Text>
            {certificates.map((cert, index) => (
                <View key={index} className="border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
                    <Text className="text-lg font-semibold">{cert.title}</Text>
                    <Text className="text-sm text-gray-600">Issued by: {cert.issuer}</Text>
                    <Text className="text-sm text-gray-600">Date: {cert.date}</Text>
                    <Text className="text-sm mt-2">{cert.description}</Text>
                </View>
            ))}
            <TouchableOpacity className="mt-4 bg-blue-500 rounded-full py-2 px-4">
                <Text className="text-white text-center">Add More</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Certificates;