import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatCard from "../../components/ChatCard";

const Chats = () => {
  let users = [
    { userName: "Daniel", ProfilePic: "..." },
    { userName: "Azhar", ProfilePic: "..." },
    { userName: "Sania", ProfilePic: "..." },
    { userName: "Valentina", ProfilePic: "..." },
  ];
  return (
    <SafeAreaView className="h-full bg-dark">
      <View className="flex flex-1">
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ChatCard userName={item.userName} ProfilePic={item.ProfilePic} />
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
