import { Column, Pressable } from "native-base";
import React from "react";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

function IconContainer({ children, onPress }) {
  const { height, width } = Layout.window;
  return (
<<<<<<< HEAD
    <Pressable onPressIn={onPress}>
      <Column
        style={{
          width: 39,
          height: 39,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.light.white,
          borderRadius: 6,
          padding: 2,
          marginLeft: 2.5,
          margin: 10,
          marginLeft: 10,
          marginTop: 20,
          elevation: 1,
        }}
      >
        {children}
      </Column>
=======
    <Pressable
      style={{
        width: width * 0.074,
        height: height * 0.04,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.light.white,
        borderRadius: 6,
        padding: 2,

        elevation: 1,
      }}
      android_ripple={{ color: "#c3c3d1", foreground: true }}
      onPress={onPress}
    >
      <Column>{children}</Column>
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
    </Pressable>
  );
}

export default IconContainer;
