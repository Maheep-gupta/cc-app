
import React from 'react';
import { Image, View } from 'react-native';

function ProfileFeedCard({ postUrl }: { postUrl: string }) {
    return (
        <View className="m-1 w-[30%] aspect-square">
            <Image
                className="w-full h-full rounded-lg"
                source={{ uri: postUrl }}
                resizeMode="cover"
            />
        </View>
    );
}

export default ProfileFeedCard;