import { useState } from 'react';
import FeedPost from '@/components/Posts/FeedPost';
import UserStory from '@/components/UserStory/UserStory';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { View, Text, FlatList, RefreshControl, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';

const FEED_DATA = [
  { id: '1', username: 'Tanjiro Kamada', avatar: require("../../assets/images/storyAvatar.jpg") },
  { id: '2', username: 'Midoriya Deku', avatar: require("../../assets/images/storyAvatar.jpg") },
  { id: '3', username: 'Iruma Sekie', avatar: require("../../assets/images/storyAvatar.jpg") },
];

export default function Home() {
  const [data, setData] = useState(FEED_DATA);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      const newData = [
        { id: '4', username: 'New User 1', avatar: require("../../assets/images/storyAvatar.jpg") },
        { id: '5', username: 'New User 2', avatar: require("../../assets/images/storyAvatar.jpg") },
        { id: '6', username: 'New User 3', avatar: require("../../assets/images/storyAvatar.jpg") },
      ];
      setData([...newData, ...data]);
      setRefreshing(false);
    }, 2000);
  };

  const renderUserStory = () => (
    <View className="mt-2 h-28">
      <FlatList
        data={[
          { currentUser: true, username: "Your Story", avatar: require("../../assets/images/storyAvatar.jpg") },
          { currentUser: false, username: "User 2", avatar: require("../../assets/images/storyAvatar.jpg") },
          { currentUser: false, username: "User 3", avatar: require("../../assets/images/storyAvatar.jpg") },
          { currentUser: false, username: "User 4", avatar: require("../../assets/images/storyAvatar.jpg") },
          { currentUser: false, username: "User 5", avatar: require("../../assets/images/storyAvatar.jpg") },
          { currentUser: false, username: "User 6", avatar: require("../../assets/images/storyAvatar.jpg") },
        ]}
        renderItem={({ item }) => (
          <UserStory currentUser={item.currentUser} username={item.username} avatar={item.avatar} />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 h-screen bg-white py-10 pt-3">
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View className='flex-row justify-between items-center p-4 pt-0 '>
        <Text className="text-lg font-bold">College Community</Text>
        <View className='flex flex-row space-x-4'>
          
          <TouchableOpacity onPress={() => router.push('/newPost')}>
          <MaterialIcons name="add-box" size={25} color="black" />

          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/notification')}>
          <Ionicons name="notifications-sharp" size={24} color="black" />

          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/messageScreen')}>
            <FontAwesome5 name="facebook-messenger" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>


      <FlatList
        data={data}
        renderItem={({ item }) => (
          <FeedPost username={item.username} avatar={item.avatar} />
        )}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={renderUserStory}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}