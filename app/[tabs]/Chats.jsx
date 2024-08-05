import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatCard from "../../components/ChatCard";

const Chats = () => {
  let users = [
    { userName: "Daniel", ProfilePic: "...", id: "1" },
    { userName: "Azhar", ProfilePic: "...", id: "2" },
    { userName: "Sania", ProfilePic: "...", id: "3" },
    { userName: "Valentina", ProfilePic: "...", id: "4" },
  ];
  return (
    <SafeAreaView className="h-full bg-dark">
      <View className="flex flex-1">
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ChatCard
              userName={item.userName}
              ProfilePic={item.ProfilePic}
              chatID={item.id}
            />
          )}
          ListHeaderComponent={() => (
            <View>
              <Text className="text-white text-2xl font-pbold">Chats</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chats;

const styles = StyleSheet.create({});
