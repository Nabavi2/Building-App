import { Octicons } from "@expo/vector-icons";
import React from "react";
import { TouchableHighlight } from "react-native";
import Colors from "../constants/Colors";

function FilterButton({ onPress, color = Colors.light.text }) {
  return (
    <TouchableHighlight
      underlayColor={Colors.light.bageBg}
      style={{
        paddingHorizontal: 5,
        paddingVertical: 1,
        borderRadius: 4,
      }}
      onPress={onPress}
    >
      <Octicons name="settings" size={27} color={color} />
    </TouchableHighlight>
  );
}

export default FilterButton;
