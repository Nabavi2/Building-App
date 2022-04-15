import { Button, Text } from "native-base";
import { StyleSheet, TextInput } from "react-native";
import React from "react";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

const size = Layout.window;

function InputComponent({placeholder, onPress, color, Size }) {
  return (
    // <Button
    //   onPress={onPress}
    //   style={[styles.container, { backgroundColor: color, width: Size }]}
    // >
    //   <Text style={styles.text}>{title}</Text>
    // </Button>
    <TextInput 
    placeholder={placeholder}
    style={}
    />
  );
}

const styles = StyleSheet.create({
    inputView: {
        width: "90%",
        flexDirection: "row",
        backgroundColor: Colors.light.white,
        borderRadius: 10,
        justifyContent: "center",
      },
      input: {
        width: "80%",
        backgroundColor: Colors.light.white,
        height: 45,
        color: "#FFF",
      },
});

export default InputComponent;
