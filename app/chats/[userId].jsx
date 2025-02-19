import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Yourchats from "../../components/Yourchats";
import { Ionicons } from "@expo/vector-icons";

const UserChat = () => {
  let { userId } = useLocalSearchParams();
  const chatData = [
    {
      userName: "John Doe",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      userId: "1",
      lastMessage: "Hey, how are you?",
      date: "2021-10-12",
    },
    {
      userName: "Jane Smith",
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
      userId: "2",
      lastMessage: "Let's catch up later.",
      date: "2021-10-11",
    },
    {
      userName: "Michael Brown",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
      userId: "3",
      lastMessage: "Did you finish the report?",
      date: "2021-10-10",
    },
    {
      userName: "Emily Davis",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
      userId: "4",
      lastMessage: "Happy Birthday!",
      date: "2021-10-09",
    },
    {
      userName: "William Johnson",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
      userId: "5",
      lastMessage: "See you at the meeting.",
      date: "2021-10-08",
    },
    {
      userName: "Olivia Martinez",
      profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
      userId: "6",
      lastMessage: "Thank you!",
      date: "2021-10-07",
    },
    {
      userName: "James Wilson",
      profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
      userId: "7",
      lastMessage: "Can we reschedule?",
      date: "2021-10-06",
    },
    {
      userName: "Sophia Anderson",
      profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
      userId: "8",
      lastMessage: "I'll be there soon.",
      date: "2021-10-05",
    },
    {
      userName: "Lucas Thomas",
      profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
      userId: "9",
      lastMessage: "Good night!",
      date: "2021-10-04",
    },
    {
      userName: "Mia Moore",
      profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
      userId: "10",
      lastMessage: "Sounds great!",
      date: "2021-10-03",
    },
  ];

  let currentChat = chatData.filter((val) => val.userId === userId);
  return (
    <View className="h-full bg-secondary">
      <View className="flex flex-1 justify-center items-center">
        <FlatList
          keyExtractor={(item) => item.userId}
          data={currentChat}
          renderItem={({ item }) => <Yourchats Message={item.lastMessage} />}
          ListHeaderComponent={() => (
            <View className="bg-gray-500 flex w-[100vw] justify-around items-center py-8 rounded flex-row">
              <Ionicons
                name={"arrow-back"}
                size={25}
                color={"white"}
                onPress={() => router.back()}
                style={{ marginLeft: 10 }}
              />
              <Text className="font-psemibold text-2xl mx-auto">
                {currentChat[0].userName}
              </Text>
              <View className="flex-row gap-4 mr-2">
                <Ionicons
                  name={"call"}
                  size={25}
                  color={"white"}
                  onPress={() => router.back()}
                  style={{ marginLeft: 10 }}
                />
                <Ionicons
                  name={"videocam"}
                  size={25}
                  color={"white"}
                  onPress={() => router.back()}
                  style={{ marginLeft: 10 }}
                />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default UserChat;

const styles = StyleSheet.create({});
