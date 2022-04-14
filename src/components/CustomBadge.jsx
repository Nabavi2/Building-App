import { Box } from "native-base";
import React from "react";
import Layout from "../constants/Layout";

const { height, width } = Layout.window;

function CustomBadge({ children, size = "small" }) {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      bg="#d8d8d8"
      w={size == "small" ? width * 0.068 : width * 0.09}
      h={size == "small" ? height * 0.038 : height * 0.052}
      borderRadius="full"
    >
      {children}
    </Box>
  );
}

export default CustomBadge;
