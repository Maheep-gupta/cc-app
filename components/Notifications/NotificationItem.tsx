import { Image } from 'expo-image';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


// fg:- Followers get
// eb:- Event Booked
// pd:- payment Done
// ja:- Job available
// ne:- New event Added
// lp:-Liked your Post
// cp:- Comment on your Post



function NotificationItem({ notificationMsg,notificationtype, Avatar, notificationTime }: { notificationMsg: string; Avatar: any; notificationTime: string,notificationtype:'ja' | 'fg' | 'eb' | 'pd'|'ne' |'' }) {
  return (
    <SafeAreaView className='w-full '>
      <View>
        <View>

        </View>
        <View>
          <Text>{notificationMsg}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default NotificationItem;