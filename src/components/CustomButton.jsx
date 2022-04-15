import { Button, Text } from "native-base";
import { StyleSheet } from "react-native";
import React from "react";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

const size = Layout.window;

function CustomButton({ title, onPress, color = Colors.light.primary, size }) {
  return (
    <Button
      onPress={onPress}
      style={[styles.container, { backgroundColor: color }]}
    >
      <Text style={styles.text}>{title}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    width: size.width * 0.3,
    height: size.height * 0.047,
    backgroundColor: Colors.light.primary,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.light.white,
  },
});

export default CustomButton;
