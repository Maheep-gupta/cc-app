import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AvailableJobs = () => {
    // Sample data for available jobs
    const jobs = [
        {
            title: "Software Intern",
            company: "Tech Innovations Ltd.",
            location: "Remote",
            datePosted: "2023-11-01",
            description: "Looking for a software intern to assist with development tasks and learn from experienced engineers."
        },
        {
            title: "Data Analyst Intern",
            company: "Data Insights Co.",
            location: "New York, NY",
            datePosted: "2023-10-25",
            description: "Seeking a data analyst intern to help analyze data and generate reports."
        },
        {
            title: "Marketing Intern",
            company: "Creative Solutions",
            location: "Los Angeles, CA",
            datePosted: "2023-11-05",
            description: "Join our marketing team to assist with campaigns and social media management."
        },
        {
            title: "Graphic Design Intern",
            company: "Design Studio",
            location: "Chicago, IL",
            datePosted: "2023-10-30",
            description: "Looking for a graphic design intern to work on creative projects and branding."
        },
        {
            title: "Web Development Intern",
            company: "Web Creators Inc.",
            location: "Austin, TX",
            datePosted: "2023-11-03",
            description: "Seeking a web development intern to assist in building and maintaining websites."
        }
    ];

    return (
        <View className="flex-1 p-4 bg-white">
            <Text className="text-xl font-bold text-center mb-4">Available Jobs for Students</Text>
            {jobs.map((job, index) => (
                <View key={index} className="border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
                    <Text className="text-lg font-semibold">{job.title}</Text>
                    <Text className="text-sm text-gray-600">Company: {job.company}</Text>
                    <Text className="text-sm text-gray-600">Location: {job.location}</Text>
                    <Text className="text-sm text-gray-600">Date Posted: {job.datePosted}</Text>
                    <Text className="text-sm mt-2">{job.description}</Text>
                    <TouchableOpacity className="mt-4 bg-blue-500 rounded-full py-2 px-4">
                        <Text className="text-white text-center">Apply Now</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

export default AvailableJobs;