import { Box, Center, Text } from "native-base";
import React from "react";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

function GradeBage({ grade, isSelected = false }) {
  const { width, height } = Layout.window;
  return (
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
  );
}

export default GradeBage;
