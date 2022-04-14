<<<<<<< HEAD
import { Button } from "native-base";
=======
import { Button, Text } from "native-base";
>>>>>>> 9b680c3f1b596f1e572a49fb60ba7499b625a0ca
import { StyleSheet } from "react-native";
import React from "react";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

const size = Layout.window;

function CustomButton({ title, onPress }) {
  return (
    <Button onPress={onPress} style={styles.container}>
<<<<<<< HEAD
      {title}
=======
      <Text style={styles.text}>{title}</Text>
>>>>>>> 9b680c3f1b596f1e572a49fb60ba7499b625a0ca
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    width: size.width * 0.23,
    height: size.height * 0.038,
    backgroundColor: Colors.light.primary,
  },
=======
    width: size.width * 0.34,
    height: size.height * 0.047,
    backgroundColor: Colors.light.primary,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.light.white,
  },
>>>>>>> 9b680c3f1b596f1e572a49fb60ba7499b625a0ca
});

export default CustomButton;
