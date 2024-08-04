import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const UserChat = () => {
  let { userId } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Text>{userId}UserChat</Text>
    </SafeAreaView>
  );
};

export default UserChat;

const styles = StyleSheet.create({});
