import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs, Stack } from "expo-router";
const Rootlayout = () => {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: "green" } }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default Rootlayout;

const styles = StyleSheet.create({});
