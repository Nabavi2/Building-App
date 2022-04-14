import React from "react";
import { Ionicons, SimpleLineIcons } from "expo-vector-icons";
import { Column, Image, Row, Text } from "native-base";

import IconContainer from "../../components/IconContainer";
import Colors from "../../constants/Colors";
import GlobalStyles from "../../constants/GlobalStyles";
import CustomBadge from "../../components/CustomBadge";

function BuildingInspection(props) {
  return (
    <Column
      style={{
        ...GlobalStyles.container,
        backgroundColor: Colors.light.primary,
        justifyContent: "flex-end",
      }}
    >
      <Column
        w={"100%"}
        h={"97.5%"}
        bg={Colors.light.background}
        borderTopLeftRadius={40}
        borderTopRightRadius={40}
        justifyContent="center"
        alignItems="center"
      >
        <Row
          w="100%"
          h="7%"
          px={5}
          justifyContent="space-between"
          alignItems="center"
          // bg={"red.300"}
        >
          <Row alignItems="center">
            <Image
              source={require("../../../assets/buildingIcon.png")}
              w={10}
              h={10}
              resizeMode="contain"
            />
            <Column pl={4}>
              <Text fontSize={13} fontWeight="bold" color={Colors.light.text}>
                Am Schawrzenberg 19, 21, 23
              </Text>
              <Text fontSize={12} color={Colors.light.subText}>
                Würzburg
              </Text>
            </Column>
          </Row>
          <IconContainer>
            <SimpleLineIcons name="options-vertical" size={20} color="black" />
          </IconContainer>
        </Row>
        <Row
          w="100%"
          h="7%"
          px={3}
          my={6}
          justifyContent="space-around"
          alignItems="center"
          // bg={"yellow.300"}
        >
          <IconContainer>
            <Ionicons name="md-arrow-back" size={27} color="black" />
          </IconContainer>
          <Row
            bg={Colors.light.white}
            borderRadius={8}
            h="75%"
            w="70%"
            px={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize={14} fontWeight="bold" color={Colors.light.primary}>
              1. Geländelflächen
            </Text>
            <CustomBadge size="small">
              <Text>A</Text>
            </CustomBadge>
          </Row>
          <IconContainer>
            <Ionicons name="md-arrow-forward" size={27} color="black" />
          </IconContainer>
        </Row>
      </Column>
    </Column>
  );
}

export default BuildingInspection;
