import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Yourchats = ({ Message }) => {
  return (
    <View className="bg-white py-4 my-3 items-start rounded-t-lg rounded-br-xl w-auto max-w-xs px-4 mx-3">
      <Text>{Message}</Text>
    </View>
  );
};

export default Yourchats;
