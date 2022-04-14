import { Button } from "native-base";
import { StyleSheet } from "react-native";
import React from "react";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

const size = Layout.window;

function CustomButton({ title, onPress }) {
  return (
    <Button onPress={onPress} style={styles.container}>
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    width: size.width * 0.23,
    height: size.height * 0.038,
    backgroundColor: Colors.light.primary,
  },
});

export default CustomButton;
