import { Column, Pressable } from "native-base";
import React from "react";
import Colors from "../constants/Colors";

function IconContainer({ children, onPress }) {
  return (
    <Pressable onPressIn={onPress}>
      <Column
        style={{
          width: 39,
          height: 39,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.light.white,
          borderRadius: 10,
          padding: 2,
          marginLeft: 2.5,
          margin: 10,
          marginLeft: 10,
          marginTop: 20,
        }}
      >
        {children}
      </Column>
    </Pressable>
  );
}

export default IconContainer;
