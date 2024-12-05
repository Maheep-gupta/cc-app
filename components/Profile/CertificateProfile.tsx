import React from 'react';
import { Text, View } from 'react-native';

function CertificateProfile() {
    return (
        <View className="px-2 border flex-1 border-gray-300 rounded-lg shadow-md pt-2">
            <Text className="text-lg font-bold mb-2 text-center">Certificate Profile</Text>
            <Text className="text-base mb-1">Events Participated: <Text className="font-semibold">10</Text></Text>
            <Text className="text-base mb-1">Events Completed: <Text className="font-semibold">5</Text></Text>
            <Text className="text-base mb-1">Events Won: <Text className="font-semibold">10</Text></Text>
            <Text className="text-base mb-1">Coding Rating: <Text className="font-semibold">3 stars</Text></Text>
        </View>
    );
}

export default CertificateProfile;