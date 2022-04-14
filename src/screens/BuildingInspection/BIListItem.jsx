import { MaterialCommunityIcons } from "expo-vector-icons";
import { Box, Column, Row, Text } from "native-base";
import React from "react";
import CustomBadge from "../../components/CustomBadge";
import ListTileContainer from "../../components/ListTileContainer";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

const { height } = Layout.window;

function BIListItem({ title, description, grade, value, hasImage }) {
  return (
    <ListTileContainer>
      <Column>
        <Text fontSize={14} color={Colors.light.text}>
          {title}
        </Text>
        <Text fontSize={14} color={Colors.light.subText}>
          {description}
        </Text>
      </Column>
      <Row>
        {grade && (
          <CustomBadge size="large">
            <Text fontSize={14} color={Colors.light.text}>
              {grade}
            </Text>
          </CustomBadge>
        )}
        <Box w={"1.5"} />
        {value && (
          <CustomBadge size="large">
            <Text fontSize={14} color={Colors.light.text}>
              {value}
            </Text>
          </CustomBadge>
        )}
        <Box w={"1.5"} />
        {hasImage && (
          <CustomBadge size="large">
            <MaterialCommunityIcons
              name="image-multiple"
              size={24}
              color={Colors.light.text}
            />
          </CustomBadge>
        )}
      </Row>
    </ListTileContainer>
  );
}

export default BIListItem;
