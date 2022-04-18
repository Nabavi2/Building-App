import { Octicons } from "@expo/vector-icons";
import React from "react";
import { TouchableHighlight } from "react-native";
import Colors from "../constants/Colors";
import IconContainer from "./IconContainer";

function FilterButton({ onPress, color = Colors.light.text }) {
  return (
<<<<<<< HEAD
    <TouchableHighlight
      underlayColor={Colors.light.bageBg}
      style={{
        elevation: 0.5,
        paddingHorizontal: 5,
        paddingVertical: 1,
        borderRadius: 4,
      }}
      onPress={onPress}
    >
      <Octicons name="settings" size={27} color={color} />
    </TouchableHighlight>
=======
    <IconContainer onPress={onPress}>
      <Octicons name="settings" size={24} color={color} />
    </IconContainer>
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
  );
}

export default FilterButton;
