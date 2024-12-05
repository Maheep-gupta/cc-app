import React from 'react';
import Chat from './Chat';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ChatData {
    name: string;
    avatar:string
}

interface ChatListProps {
    data: ChatData[];
}

const ChatList: React.FC<ChatListProps> = ({ data }) => {
    return (
        <>
            {data.length <= 0 ?
                <SafeAreaView className='flex-1  flex-row justify-center items-center
                 
                ' >
                    <Text className='text-2xl'>No Messages Found</Text>
                </SafeAreaView> :
                data.map((chat, index) => (
                    <Chat
                        key={index}
                        username={chat.name}
                        recentMsg='hi'
                        notification={Math.floor(Math.random()*5)}
                        Avatar={chat.avatar}

                    />
                ))}
        </>
    );
};

export default ChatList;