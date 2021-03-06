import { Box, Row } from "native-base";
import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

const { height, width } = Layout.window;

function ListTileContainer({ children, onPress }) {
  return (
    <TouchableHighlight
      style={styles.touch}
      underlayColor={Colors.light.bageBg}
      onPress={onPress}
    >
      <Box w={width} h={height * 0.085}>
        <Row
          bg="white"
          borderRadius="xl"
          height={"100%"}
          mx={2}
          px={2.5}
          justifyContent="space-between"
          alignItems="center"
          shadow={"0"}
        >
          {children}
        </Row>
      </Box>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  touch: {
    marginVertical: 5,
    borderRadius: width * 0.03,
  },
});

export default ListTileContainer;
