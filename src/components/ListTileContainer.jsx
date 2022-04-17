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
      <Row
        w={width * 0.995}
        h={height * 0.085}
        bg="white"
        borderRadius="xl"
        pl={5}
        pr={2.5}
        justifyContent="space-between"
        alignItems="center"
        shadow={"1"}
      >
        {children}
      </Row>
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
