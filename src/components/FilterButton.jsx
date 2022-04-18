import { Octicons } from "@expo/vector-icons";
import React from "react";
import { TouchableHighlight } from "react-native";
import Colors from "../constants/Colors";
import IconContainer from "./IconContainer";

function FilterButton({ onPress, color = Colors.light.text }) {
  return (
    <IconContainer onPress={onPress}>
      <Octicons name="settings" size={24} color={color} />
    </IconContainer>
  );
}

export default FilterButton;
