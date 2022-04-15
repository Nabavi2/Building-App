import { Octicons } from "expo-vector-icons";
import React from "react";
import { TouchableHighlight } from "react-native";
import Colors from "../constants/Colors";

function FilterButton({ onPress }) {
  return (
    <TouchableHighlight
      underlayColor={Colors.light.bageBg}
      under
      style={{
        paddingHorizontal: 5,
        paddingVertical: 1,
        borderRadius: 4,
      }}
      onPress={onPress}
    >
      <Octicons name="settings" size={27} color={Colors.light.text} />
    </TouchableHighlight>
  );
}

export default FilterButton;
