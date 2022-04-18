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
<<<<<<< HEAD
    borderRadius: 7,
=======
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
    elevation: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.light.primary,
  },
});

export default CustomButton;
