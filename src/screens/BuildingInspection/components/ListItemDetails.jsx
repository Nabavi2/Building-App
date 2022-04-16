<<<<<<< HEAD
import { Ionicons } from "@expo/vector-icons";
import { Box, Column, FlatList, Flex, Row, Text, TextArea } from "native-base";
import React from "react";
=======
import { AntDesign, Foundation, Ionicons } from "@expo/vector-icons";
import {
  Box,
  Button,
  Center,
  Column,
  FlatList,
  Flex,
  Pressable,
  Row,
  Spacer,
  Text,
  TextArea,
  ZStack,
} from "native-base";
import React, { useState } from "react";
import { Modal } from "react-native";
>>>>>>> bd9f0f683c49a742dd29da5b7f803ba42722a173
import CustomButton from "../../../components/CustomButton";
import GradeBage from "../../../components/GradeBage";
import IconContainer from "../../../components/IconContainer";
import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

function ListItemDetails(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [showPic, setShowPic] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const { width } = Layout.window;
  const [bages, setBages] = useState([
    {
      id: "a",
      se: true,
    },
    {
      id: "b",
      se: false,
    },
    {
      id: "c",
      se: false,
    },
    {
      id: "d",
      se: false,
    },
  ]);
  const data = ["#ED760E", "#9B111E", "#DE4C8A", "#47402E", "#8E402A"];
  return (
    <ZStack justifyContent={"space-between"} h={"100%"} w="100%">
      <Modal
        animationType="fade"
        onRequestClose={() => setShowPic(false)}
        visible={showPic}
        transparent={true}
      >
        <Column w={"100%"} h={"100%"} bg={Colors.light.gray900}>
          <Row pt={8} pl={3}>
            <IconContainer onPress={() => setShowPic(false)}>
              <AntDesign name="close" size={24} color="black" />
            </IconContainer>
          </Row>
          <Center flex={1}>
            <Box
              w={"70%"}
              h={"50%"}
              borderRadius="xl"
              bgColor={selectedImage}
              mx={3}
            />
          </Center>
        </Column>
      </Modal>
      <Box pl={"7%"} pr={"12%"}>
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
          {isEditing && (
            <Column>
              <Row justifyContent={"space-between"} pr={2}>
                {data.map((item) => (
                  <ZStack
                    bg={item}
                    w={57}
                    h={57}
                    borderRadius={"xl"}
                    alignItems={"flex-end"}
                  >
                    <Center
                      w={5}
                      h={5}
                      top={-8}
                      right={2.5}
                      borderRadius="full"
                      bg={Colors.light.red}
                    >
                      <Ionicons name="save" size={10} color="white" />
                    </Center>
                  </ZStack>
                ))}
              </Row>
              <Center
                w={57}
                h={57}
                mt={2}
                borderRadius={"xl"}
                borderColor={Colors.light.primary}
                borderWidth={1}
              >
                <AntDesign name="plus" size={30} color={Colors.light.primary} />
              </Center>
            </Column>
          )}
          {!isEditing && (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(it, index) => index}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    setSelectedImage(item);
                    setShowPic(true);
                  }}
                >
                  <Box
                    w={122}
                    h={122}
                    borderRadius="xl"
                    bgColor={item}
                    mx={3}
                  />
                </Pressable>
              )}
            />
          )}
        </Column>

        {/* Bages and text area */}
        <Column height={isEditing ? "40%" : "35%"}>
          <Text
            mb={4}
            color={Colors.light.text}
            fontWeight="bold"
            fontSize={16}
          >
            Zustand
          </Text>
          <Row justifyContent={"space-between"} w={"80%"}>
            {bages.map((item) => (
              <GradeBage
                key={item.id}
                isSelected={item.se}
                grade={item.id}
                onPress={() =>
                  isEditing
                    ? setBages(
                        bages.map((it) => ({
                          id: it.id,
                          se: item.id === it.id ? true : false,
                        }))
                      )
                    : null
                }
              />
            ))}
          </Row>
          <TextArea
            p={2}
            shadow={"3"}
            mt={5}
            bg="white"
            color={Colors.light.subText}
            maxH={"50%"}
          >
            {bages
              .filter((it) => it.se)
              .map((it) => (
                <Text fontSize={16} fontWeight="bold">
                  {it.id.toUpperCase()}:{" "}
                  <Text fontSize={14} fontWeight="normal">
                    {" "}
                    This text shows that {it.id.toUpperCase()} is selected
                  </Text>
                </Text>
              ))}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </TextArea>
        </Column>
        {/* Anteil */}
        <Row mt={isEditing ? 6 : 3} mb={3} alignItems="center">
          <Column alignItems={"center"} mr={isEditing ? "10%" : "40%"}>
            <Text
              mb={1}
              fontSize={16}
              fontWeight={"bold"}
              color={Colors.light.text}
            >
              Anteil
            </Text>
            {!isEditing && (
              <Text
                fontSize={16}
                fontWeight={"bold"}
                color={Colors.light.subText}
              >
                70
              </Text>
            )}
          </Column>
          {isEditing && (
            <Center bg={Colors.light.gray900} w={81} h={62} borderRadius="xl">
              <Text fontSize={14} color="white">
                70
              </Text>
            </Center>
          )}
          {!isEditing && (
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
          )}
        </Row>
        {isEditing && <Spacer h={"8.5%"} />}
        {!isEditing && (
          <Column>
            <Text
              mb={1}
              fontSize={16}
              fontWeight={"bold"}
              color={Colors.light.text}
            >
              Straße
            </Text>
            <Text
              fontSize={16}
              fontWeight={"bold"}
              color={Colors.light.subText}
            >
              Hartmannstr. 31, 33, 35, 37, 39, 41, 43
            </Text>
          </Column>
        )}
      </Box>
      <Row
        shadow={"9"}
        bottom={0}
        zIndex={5}
        w={width}
        h={"9%"}
        bg="white"
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        {isEditing && (
          <Pressable onPress={() => setIsEditing(false)}>
            <Text fontSize={16} fontWeight={"bold"} color={Colors.light.text}>
              CANCEL
            </Text>
          </Pressable>
        )}
        {!isEditing && (
          <IconContainer>
            <Ionicons name="md-arrow-back" size={27} color="black" />
          </IconContainer>
        )}
        <CustomButton
          title={isEditing ? "SAVE" : "EDIT"}
          onPress={() => setIsEditing(!isEditing)}
        />
        {!isEditing && (
          <IconContainer>
            <Ionicons name="md-arrow-forward" size={27} color="black" />
          </IconContainer>
        )}
      </Row>
    </ZStack>
  );
}

export default ListItemDetails;
