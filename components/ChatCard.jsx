import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatCard = ({ userName, ProfilePic }) => {
  return (
    <View className="flex flex-row p-5 justify-between items-center border-b-2 border-gray-700">
      <Image
        className="text-white border-2 border-gray-50 h-12 w-12 rounded-full"
        source={{
          uri: "https://fastly.picsum.photos/id/602/200/300.jpg?hmac=TkzlF12MtJomcmqzsOc-CR43gSl3xnotDQRPBvM7Avw",
        }}
      />
      <View className=" mr-24 flex items-start">
        <Text className="text-white text-center font-psemibold">
          {userName}
        </Text>
        <Text className="text-gray-400 font-plight ">new message...</Text>
      </View>
      <Text className="text-white">2021-10-12</Text>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({});
