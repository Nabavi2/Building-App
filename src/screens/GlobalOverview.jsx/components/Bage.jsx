import { Avatar, Row, Text } from "native-base";
import React from "react";
import Colors from "../../../constants/Colors";

const Bage = ({ text, color }) => (
  <Row alignItems={"center"}>
    <Avatar bg={color} width={15} height={15} />
    <Text ml={2} color={Colors.light.subText}>
      {text}
    </Text>
  </Row>
);

export default Bage;
