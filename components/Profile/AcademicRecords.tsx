import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AcademicRecords = () => {
    // Sample data for academic records
    const records = [
        {
            level: "10th Grade",
            school: "ABC High School",
            year: 2018,
            percentage: "85%"
        },
        {
            level: "12th Grade",
            school: "XYZ Senior Secondary School",
            year: 2020,
            percentage: "90%"
        },
        {
            level: "Graduation",
            school: "University of Example",
            year: 2023,
            percentage: "88%"
        }
    ];

    return (
        <View className="flex-1 p-4">
            <Text className="text-xl font-bold text-center mb-4">Academic Records</Text>
            {records.map((record, index) => (
                <View key={index} className="border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
                    <Text className="text-lg font-semibold">{record.level}</Text>
                    <Text className="text-sm">School/College: {record.school}</Text>
                    <Text className="text-sm">Year of Passing: {record.year}</Text>
                    <Text className="text-sm">Percentage: {record.percentage}</Text>
                </View>
            ))}
            <TouchableOpacity className="mt-4 bg-blue-500 rounded-full py-2 px-4">
                <Text className="text-white text-center">Add More</Text>
            </TouchableOpacity>

        </View>
    );
};

export default AcademicRecords;