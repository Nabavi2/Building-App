import { Button, Text } from "native-base";
import { StyleSheet } from "react-native";
import React from "react";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

const size = Layout.window;

function CustomButton({
  title,
  onPress,
  color = Colors.light.primary,
  size,
  textColor,
}) {
  return (
    <Button
      android_ripple={{ color: "#c3c3d1", foreground: true }}
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: onPress ? color : Colors.light.white },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color:
              color === Colors.light.white
                ? Colors.light.gray500
                : Colors.light.white,
          },
        ]}
      >
        {title}
      </Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    width: size.width * 0.3,
    height: size.height * 0.049,
    backgroundColor: Colors.light.primary,
    borderRadius: 7,
    elevation: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.light.primary,
  },
});

export default CustomButton;
