import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, Column, Row, Text } from "native-base";
import React, { useState } from "react";
import CustomBadge from "../../../components/CustomBadge";
import CustomModal from "../../../components/CustomModal";
import ListTileContainer from "../../../components/ListTileContainer";
import Colors from "../../../constants/Colors";
import ListItemDetails from "./ListItemDetails";

function BIListItem({ title, description, grade, value, hasImage }) {
  const [visible, setIsVisible] = useState(false);
  return (
    <ListTileContainer onPress={() => setIsVisible(true)}>
      <Column>
        <CustomModal
          isBig
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        >
          <ListItemDetails />
        </CustomModal>
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
