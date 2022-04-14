import { Feather, FontAwesome5 } from "expo-vector-icons";
import { Column, Row, Text } from "native-base";
import React from "react";
import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

const height = Layout.window.height;

function DashboardListItem({ name, type, date, address }) {
  return (
    <Row
      w="md"
      my="1.5"
      px={5}
      h={height * 0.08}
      bg={Colors.light.white}
      borderRadius="xl"
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Column>
        <Text fontSize={14} color={Colors.light.text}>
          {name}
        </Text>
        <Text fontSize={14} color={Colors.light.subText}>
          {date} - {address}
        </Text>
      </Column>
      <Column h={"69%"} justifyContent="flex-end">
        {type === "building" ? (
          <FontAwesome5 name="building" size={24} color="black" />
        ) : (
          <Feather name="home" size={24} color="black" />
        )}
      </Column>
    </Row>
  );
}

export default DashboardListItem;
