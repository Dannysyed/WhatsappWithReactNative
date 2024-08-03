import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../constants/icons";

const Index = () => {
  return (
    <SafeAreaView className="h-full bg-secondary">
      <View className="flex flex-1 justify-center items-center gap-5">
        <Image source={icons.whatsapp1} className="w-[200px] h-[200px]" />
        <Link
          href={"/home"}
          className="px-10 py-3 bg-secondary-200 rounded font-pbold text-white text-sm"
        >
          Login to Continue
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({});
