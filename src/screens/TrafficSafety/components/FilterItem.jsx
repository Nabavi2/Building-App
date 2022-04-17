import { Column, Row, Switch, Text } from "native-base";
import React from "react";
import Colors from "../../../constants/Colors";

function FilterItem({ title, subtitle, value }) {
  return (
    <Row
      w={"100%"}
      h={"15%"}
      alignItems="center"
      justifyContent={"space-between"}
    >
      <Column>
        <Text fontWeight={"bold"} fontSize={14} color={Colors.light.subText}>
          {title}
        </Text>
        <Text fontSize={12} color={Colors.light.subText}>
          {subtitle}
        </Text>
      </Column>

      <Switch
        value={value}
        trackColor={{
          true: Colors.light.primary,
          false: "#9f9f9f",
        }}
        thumbColor="#7d7d7d"
      />
    </Row>
  );
}

export default FilterItem;
