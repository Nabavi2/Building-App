import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar, Box, Column, Row, Text } from "native-base";
import React, { useState } from "react";
// import { Swipeable } from "react-native-gesture-handler";
import CustomBadge from "../../../components/CustomBadge";
import CustomModal from "../../../components/CustomModal";
import ListTileContainer from "../../../components/ListTileContainer";
import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";
import ListItemDetails from "./ListItemDetails";
// import Swipeable from "react-native-swipeable";
import Swipeout from "react-native-swipeout";
function TSListItem({ title, description, grade, value, hasImage }) {
  const { width } = Layout.window;
  const [visible, setIsVisible] = useState(false);
  return (
    <Swipeout
      style={{ backgroundColor: Colors.light.background }}
      right={[{ text: "helel", backgroundColor: Colors.light.green400 }]}
    >
      <ListTileContainer onPress={() => setIsVisible(true)}>
        <Column w={"98%"} h={"100%"} justifyContent="center" px={"2%"}>
          <CustomModal
            isBig
            visible={visible}
            onRequestClose={() => setIsVisible(false)}
          >
            <ListItemDetails />
          </CustomModal>

          <Row h={"50%"} w={"100%"} alignItems={"center"}>
            <Avatar size={3} bg={hasImage ? "#f372da" : "#2b99dc"} mr={2} />
            <Text fontSize={14} color={Colors.light.text}>
              {title}
            </Text>
          </Row>
          <Row pl={5} h={"50%"} w={"100%"}>
            <Text mr={"12%"} fontSize={14} color={Colors.light.subText}>
              {description}
            </Text>
            <Row width={"30%"} justifyContent={"space-around"}>
              <CustomBadge>
                <Ionicons name="eye" size={24} color="#77838f" />
              </CustomBadge>
              <CustomBadge>
                <MaterialCommunityIcons
                  name="hammer-wrench"
                  size={24}
                  color="#77838f"
                />
              </CustomBadge>
            </Row>
          </Row>
        </Column>
        <Box
          bg="#bf4b31"
          height={"100%"}
          w={"2%"}
          mr={-2.5}
          borderTopRightRadius={width * 0.03}
          borderBottomRightRadius={width * 0.03}
        />
      </ListTileContainer>
    </Swipeout>
  );
}

export default TSListItem;
