import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const UserChat = () => {
  let { userId } = useLocalSearchParams();
  return (
    <SafeAreaView className="h-full bg-primary">
      <View className="flex flex-1 justify-center items-center">
        <Text className="font-psemibold text-2xl">
          The chat Id for this user is {userId}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default UserChat;

const styles = StyleSheet.create({});
