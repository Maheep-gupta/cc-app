
import React from 'react';
import { ScrollView, View } from 'react-native';
import ProfileFeedCard from './ProfileFeedCard';

function MySpace() {
  const posts = [
    "https://ui-avatars.com/api/?name=Post+1&bold=true&background=random&uppercase=false",
    "https://ui-avatars.com/api/?name=Post+2&bold=true&background=random&uppercase=false",
    "https://ui-avatars.com/api/?name=Post+3&bold=true&background=random&uppercase=false",
    "https://ui-avatars.com/api/?name=Post+4&bold=true&background=random&uppercase=false",
    "https://ui-avatars.com/api/?name=Post+5&bold=true&background=random&uppercase=false",
    "https://ui-avatars.com/api/?name=Post+6&bold=true&background=random&uppercase=false",
    "https://ui-avatars.com/api/?name=Post+7&bold=true&background=random&uppercase=false",
    "https://ui-avatars.com/api/?name=Post+8&bold=true&background=random&uppercase=false",
    "https://ui-avatars.com/api/?name=Post+9&bold=true&background=random&uppercase=false",
    "https://ui-avatars.com/api/?name=Post+10&bold=true&background=random&uppercase=false",
  ];

  return (
    <View className='h-fit'>
      <View className="flex-row flex-wrap justify-between">
        {posts.map((postUrl, index) => (
          <ProfileFeedCard key={index} postUrl={postUrl} />
        ))}
      </View>
    </View>
  );
}

export default MySpace;