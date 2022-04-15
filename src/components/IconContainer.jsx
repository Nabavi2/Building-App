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
          borderRadius: 5,
          padding: 2,
          marginLeft: 2.5,
        }}
      >
        {children}
      </Column>
    </Pressable>
  );
}

export default IconContainer;
