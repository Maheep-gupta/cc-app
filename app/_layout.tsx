import { Stack } from 'expo-router'
import React from 'react'
function _layout() {
  return (
    // Step:- Check Wether user is login or not if login then don't show create account
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name='chattingScreen' options={{ headerShown: false }} />
      <Stack.Screen name='storyScreen' options={{ headerShown: false }} />
      <Stack.Screen name='eventDetails' options={{ headerShown: false }} />
      <Stack.Screen name='messageScreen' options={{ headerShown: false }} />
      <Stack.Screen name='forgetPassword' options={{ headerShown: false }} />
      <Stack.Screen name='newPost' options={{ headerShown: false }} />
      <Stack.Screen name='login' options={{ headerShown: false }} />
      <Stack.Screen name='createAccount' options={{ headerShown: false }} />
      <Stack.Screen name='notification' options={{ headerShown: false }} />
    </Stack>

  )
}

export default _layout