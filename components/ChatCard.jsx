import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import React from "react";
import { useRouter, usePathname } from "expo-router";

const ChatCard = ({ userName, ProfilePic }) => {
  let pathname = usePathname();
  let userId = "12";
  const router = useRouter();
  return (
    <TouchableOpacity
      className="flex flex-row p-5 justify-between items-center border-b-2 border-gray-700 "
      onPress={() => {
        router.push(`/chats/${userId}`);
      }}
    >
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
    </TouchableOpacity>
  );
};

export default ChatCard;

const styles = StyleSheet.create({});
