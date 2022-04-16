import { Ionicons } from "@expo/vector-icons";
import { Box, Column, FlatList, Flex, Row, Text, TextArea } from "native-base";
import React from "react";
import CustomButton from "../../../components/CustomButton";
import GradeBage from "../../../components/GradeBage";
import IconContainer from "../../../components/IconContainer";
import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

function ListItemDetails(props) {
  const { width } = Layout.window;
  const data = ["#ED760E", "#9B111E", "#DE4C8A", "#47402E", "#8E402A"];
  return (
    <Flex>
      <Box pl={"7%"} pr={"3%"}>
        {/* Title Section */}
        <Column>
          <Text fontSize={18} fontWeight="bold" color={Colors.light.primary}>
            Baugruppe name goes here
          </Text>
          <Row width={"100%"} justifyContent={"space-between"}>
            <Text fontSize={14} color={Colors.light.subText}>
              Am Schawrzenberg 19, 21, 23
            </Text>
            <Text fontSize={14} color={Colors.light.subText}>
              VE. 001-100
            </Text>
          </Row>
        </Column>
        {/* Images section */}
        <Column my={6}>
          <Text
            mb={4}
            fontWeight={"bold"}
            fontSize={16}
            color={Colors.light.text}
          >
            Images
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(it, index) => index}
            renderItem={({ item }) => (
              <Box w={122} h={122} borderRadius="xl" bgColor={item} mx={3} />
            )}
          />
        </Column>

        {/* Bages and text area */}
        <Column>
          <Text
            mb={4}
            color={Colors.light.text}
            fontWeight="bold"
            fontSize={16}
          >
            Zustand
          </Text>
          <Row justifyContent={"space-between"} w={"80%"}>
            <GradeBage isSelected={true} grade="A" />
            <GradeBage isSelected={false} grade="b" />
            <GradeBage isSelected={false} grade="c" />
            <GradeBage isSelected={false} grade="d" />
          </Row>
          <TextArea
            shadow={"3"}
            mt={5}
            bg="white"
            color={Colors.light.subText}
            placeholder={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
            }
          />
        </Column>
        {/* Anteil */}
        <Row mt={6} mb={3}>
          <Column alignItems={"center"} mr="40%">
            <Text
              mb={1}
              fontSize={16}
              fontWeight={"bold"}
              color={Colors.light.text}
            >
              Anteil
            </Text>
            <Text
              fontSize={16}
              fontWeight={"bold"}
              color={Colors.light.subText}
            >
              70
            </Text>
          </Column>
          <Column alignItems={"center"}>
            <Text
              mb={1}
              fontSize={16}
              fontWeight={"bold"}
              color={Colors.light.text}
            >
              Letzte Mod.
            </Text>
            <Text
              fontSize={16}
              fontWeight={"bold"}
              color={Colors.light.subText}
            >
              12 Sep. 2021
            </Text>
          </Column>
        </Row>
        <Column>
          <Text
            mb={1}
            fontSize={16}
            fontWeight={"bold"}
            color={Colors.light.text}
          >
            Straße
          </Text>
          <Text fontSize={16} fontWeight={"bold"} color={Colors.light.subText}>
            Hartmannstr. 31, 33, 35, 37, 39, 41, 43
          </Text>
        </Column>
      </Box>
      <Row
        bottom={-"30"}
        w={width}
        h={"11%"}
        bg="white"
        alignItems={"center"}
        justifyContent="space-evenly"
      >
        <IconContainer>
          <Ionicons name="md-arrow-back" size={27} color="black" />
        </IconContainer>
        <CustomButton title={"EDIT"} />
        <IconContainer>
          <Ionicons name="md-arrow-forward" size={27} color="black" />
        </IconContainer>
      </Row>
    </Flex>
  );
}

export default ListItemDetails;
