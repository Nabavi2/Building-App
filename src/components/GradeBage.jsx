import { Box, Center, Pressable, Text } from "native-base";
import React from "react";
import Colors from "../constants/Colors";

function GradeBage({ grade, isSelected = false, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Center
        w={12}
        h={12}
        borderRadius={"full"}
        bg={isSelected ? Colors.light.primary : Colors.light.gray800}
      >
        <Text mb={1} fontSize={18} fontWeight="bold" color={"white"}>
          {grade.toUpperCase()}
        </Text>
      </Center>
    </Pressable>
  );
}

export default GradeBage;
