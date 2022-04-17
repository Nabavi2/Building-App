import { Row } from "native-base";
import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

const size = Layout.window;

function TabItem({ onPress, isSelected, title }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.tabItem,
        backgroundColor: isSelected ? "#3a3e3d" : Colors.light.white,
      }}
    >
      <Text
        style={{
          ...styles.text,
          color: isSelected ? Colors.light.white : Colors.light.text,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    width: size.width * 0.42,
    height: size.height * 0.037,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: (size.height * 0.037) / 6,
  },
  text: {
    fontSize: 14,
  },
});
export default TabItem;
