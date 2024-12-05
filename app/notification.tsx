import NotificationItem from '@/components/Notifications/NotificationItem';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Notification() {
  return (
    <SafeAreaView className='p-5 bg-white h-screen'>
      <StatusBar barStyle={'dark-content'}/>
      <View className='flex flex-row items-center h-10 mb-4'>
        <TouchableOpacity
          activeOpacity={1}
          className='w-7 h-full flex justify-center items-center rounded-lg'
          onPress={() => {
            router.canGoBack() ? router.back() : router.replace("/(tabs)/home");
          }}
        >
          <Ionicons name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <Text className='text-2xl font-bold ml-2'>Notifications</Text>
      </View>

      <ScrollView  className=''>
        <NotificationItem 
        notificationtype='eb'
          notificationMsg='Midoriya Liked Your Post' 
          Avatar={"https://ui-avatars.com/api/?name=Midoriya+Deku&bold=true&background=random&uppercase=false"} 
          notificationTime='Just Now' 
        />
        <NotificationItem 
        notificationtype='eb'
          notificationMsg='Midoriya Liked Your Post' 
          Avatar={"https://ui-avatars.com/api/?name=Midoriya+Deku&bold=true&background=random&uppercase=false"} 
          notificationTime='5 min ago' 
        />
        <NotificationItem 
        notificationtype='eb'
          notificationMsg='Midoriya Liked Your Post' 
          Avatar={"https://ui-avatars.com/api/?name=Midoriya+Deku&bold=true&background=random&uppercase=false"} 
          notificationTime='2 hour ago' 
        />
        <NotificationItem 
        notificationtype='eb'
          notificationMsg='Midoriya Commented on Your Post' 
          Avatar={"https://ui-avatars.com/api/?name=Midoriya+Deku&bold=true&background=random&uppercase=false"} 
          notificationTime='Yesterday'
        /><NotificationItem 
        notificationtype='eb'
          notificationMsg='Midoriya Commented on Your Post' 
          Avatar={"https://ui-avatars.com/api/?name=Midoriya+Deku&bold=true&background=random&uppercase=false"} 
          notificationTime='Yesterday'
        /><NotificationItem 
        notificationtype='eb'
          notificationMsg='Midoriya Commented on Your Post' 
          Avatar={"https://ui-avatars.com/api/?name=Midoriya+Deku&bold=true&background=random&uppercase=false"} 
          notificationTime='Yesterday'
        /><NotificationItem 
        notificationtype='eb'
          notificationMsg='Midoriya Commented on Your Post' 
          Avatar={"https://ui-avatars.com/api/?name=Midoriya+Deku&bold=true&background=random&uppercase=false"} 
          notificationTime='Yesterday'
        /><NotificationItem 
        notificationtype='eb'
          notificationMsg='Midoriya Commented on Your Post' 
          Avatar={"https://ui-avatars.com/api/?name=Midoriya+Deku&bold=true&background=random&uppercase=false"} 
          notificationTime='Yesterday'
        /><NotificationItem 
        notificationtype='eb'
          notificationMsg='Midoriya Commented on Your Post' 
          Avatar={"https://ui-avatars.com/api/?name=Midoriya+Deku&bold=true&background=random&uppercase=false"} 
          notificationTime='Yesterday'
        /><NotificationItem 
        notificationtype='eb'
          notificationMsg='Midoriya Commented on Your Post' 
          Avatar={"https://ui-avatars.com/api/?name=Midoriya+Deku&bold=true&background=random&uppercase=false"} 
          notificationTime='Yesterday'
        />
        {/* Add more notifications as needed */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Notification;