import { Column, Pressable } from "native-base";
import React from "react";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

function IconContainer({ children, onPress }) {
  const { height, width } = Layout.window;
  return (
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
    </Pressable>
  );
}

export default IconContainer;
