import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";
import icons from "../../constants/icons";
const Rootlayout = () => {
  let TabIcon = ({ icon, colors, title }) => {
    return (
      <View className="flex items-center justify-center gap-1">
        <Ionicons name={icon} size={20} color={colors} />
        <Text className="font-pmedium" style={{ color: colors }}>
          {title}
        </Text>
      </View>
    );
  };
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#00E676",
        headerStyle: { backgroundColor: "green" },
        tabBarStyle: {
          backgroundColor: "#161622",
          height: 57,
          borderTopEndRadius: 3,
          borderTopStartRadius: 3,
        },
      }}
    >
      <Tabs.Screen
        name="Chats"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={"chatbox"} colors={color} title={"Chats"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={"home"} colors={color} title={"Home"} />
          ),
        }}
      />

      <Tabs.Screen
        name="Settings"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={"settings"} colors={color} title={"Home"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Rootlayout;

const styles = StyleSheet.create({});
