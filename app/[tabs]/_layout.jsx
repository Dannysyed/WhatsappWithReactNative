import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
const Rootlayout = () => {
  return (
    <Tabs screenOptions={{ headerStyle: { backgroundColor: "green" } }}>
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="Chats" />
    </Tabs>
  );
};

export default Rootlayout;

const styles = StyleSheet.create({});
