import { Box } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import Layout from "../constants/Layout";

function CustomBadge({ children, size = "small" }) {
  return (
    <Box
      style={[
        styles.container,
        {
          width: size === "small" ? 32 : 42,
          height: size === "small" ? 32 : 42,
        },
      ]}
      borderRadius="full"
    >
      {children}
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d8d8d8",
  },
});

export default CustomBadge;
