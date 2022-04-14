import { Row } from "native-base";
import React from "react";
import Layout from "../constants/Layout";

const { height } = Layout.window;

function ListTileContainer({ children }) {
  return (
    <Row
      w="md"
      my="1.5"
      h={height * 0.085}
      bg="white"
      borderRadius="xl"
      pl={5}
      pr={2.5}
      justifyContent="space-between"
      alignItems="center"
    >
      {children}
    </Row>
  );
}

export default ListTileContainer;
