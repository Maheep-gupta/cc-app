import React, { useState } from 'react';
import { AntDesign, Entypo, Ionicons, MaterialIcons, FontAwesome,FontAwesome5 } from '@expo/vector-icons';
import { router, Tabs } from 'expo-router';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { useNavigationState } from '@react-navigation/native';

function TabIconButton({ color, iconName, iconType, isSelected, onPress }: {
  color: string;
  iconName: { nameActive: string; nameNonActive: string };
  iconType: string;
  isSelected: boolean;
  onPress: () => void;
}) {
  const iconColor = isSelected ? '#1B79E5' : color;
  const scale = isSelected ? 1 : 1;
  const activeIconName = isSelected ? iconName.nameActive : iconName.nameNonActive;

  return (
    <TouchableOpacity 
      className='flex-1 justify-center items-center' 
      onPress={onPress}
      activeOpacity={1}
    >
      <View style={{ transform: [{ scale }] }}>
        {iconType === 'AntDesign' && <AntDesign name={activeIconName as any} size={30} color={iconColor} />}
        {iconType === 'Entypo' && <Entypo name={activeIconName as any} size={30} color={iconColor} />}
        {iconType === 'Ionicons' && <Ionicons name={activeIconName as any} size={30} color={iconColor} />}
        {iconType === 'MaterialIcons' && <MaterialIcons name={activeIconName as any} size={30} color={iconColor} />}
        {iconType === 'FontAwesome' && <FontAwesome name={activeIconName as any} size={30} color={iconColor} />}
        {iconType === 'FontAwesome5' && <FontAwesome5 name={activeIconName as any} size={28} color={iconColor} />}
      </View>
    </TouchableOpacity>
  );
}

export default function TabLayout() {
  const [selectedTab, setSelectedTab] = useState<string>('home');

  // // Get the current route name
  // const currentRouteName = useNavigationState((state) => {
  //   const route = state.routes[state.index]; // Get the current route
  //   return route.name; // Return the current route's name
  // });

  // console.log('Current Route:', currentRouteName); // Log the current route

  const tabs = [
    {
      name: "home",
      icon: {
        type: "Ionicons",
        nameNonActive: "home-outline",
        nameActive: "home"
      },
    },
    {
      name: "search",
      icon: {
        type: "Ionicons",
        nameNonActive: "search",
        nameActive: "search"
      }
    },
    {
      name: "courses",
      icon: {
        type: "FontAwesome5",
        nameNonActive: "laptop-code",
        nameActive: "laptop-code"
      }
    },
    {
      name: "events",
      icon: {
        type: "MaterialIcons",
        nameNonActive: "event",
        nameActive: "event"
      }
    },
    {
      name: "profile",
      icon: {
        type: "FontAwesome",
        nameNonActive: "user-o",
        nameActive: "user"
      }
    }
  ];

  return (
    <>
      <StatusBar barStyle={'dark-content'}/>
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#fff',
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            tabBarActiveTintColor: '#1B79E5', 
            tabBarShowLabel: false,
            tabBarButton: ({ color = "#A9A9A9" }: any) => (
              <TabIconButton
                color={color}
                iconName={tab.icon}
                iconType={tab.icon.type}
                isSelected={selectedTab === tab.name}
                onPress={() => {
                  setSelectedTab(tab.name);
                  router.navigate(tab.name as any);
                }}
              />
            )
          }}
        />
      ))}
      </Tabs>
    </>
      
  );
}