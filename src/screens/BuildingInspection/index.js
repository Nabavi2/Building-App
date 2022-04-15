import React, { useState } from "react";
import { Modal, TouchableHighlight } from "react-native";
import {
  Entypo,
  Ionicons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
} from "expo-vector-icons";
import {
  Box,
  Center,
  CheckIcon,
  Column,
  FlatList,
  Image,
  Row,
  Select,
  Switch,
  Text,
  TextArea,
  ZStack,
} from "native-base";

import IconContainer from "../../components/IconContainer";
import Colors from "../../constants/Colors";
import GlobalStyles from "../../constants/GlobalStyles";
import CustomBadge from "../../components/CustomBadge";
import CustomFilterIcon from "../../components/CustomFilterIcon";
import BIListItem from "./components/BIListItem";
import Layout from "../../constants/Layout";
import { Dimensions } from "react-native";
import GradeBage from "../../components/GradeBage";
import CustomButton from "../../components/CustomButton";
import Slider from "@react-native-community/slider";
import CustomModal from "../../components/CustomModal";
import FilterButton from "../../components/FilterButton";
import SettingFilter from "./components/SettingFilter";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

function BuildingInspection(props) {
  const [showAddBuildingModal, setShowAddBuildingModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const [value, setValue] = useState(0);
  const Stack = createNativeStackNavigator();

  return (
    <Column
      style={{
        ...GlobalStyles.container,
        backgroundColor: Colors.light.primary,
        justifyContent: "flex-end",
      }}
    >
      {/* Adding Building list Item */}
      <CustomModal
        onRequestClose={() => setShowAddBuildingModal(false)}
        visible={showAddBuildingModal}
      >
        <Column pl={"2%"}>
          <Text color={Colors.light.primary} fontWeight="bold" fontSize={18}>
            SELECT ZUSTAND
          </Text>
          <Box bg={Colors.light.primary} h={1} w={"10"} borderRadius="sm" />
        </Column>
        {/* Bages and text area */}
        <Column my={8}>
          <Row justifyContent={"space-between"} w={"60%"}>
            <GradeBage isSelected={true} grade="A" />
            <GradeBage isSelected={false} grade="b" />
            <GradeBage isSelected={false} grade="c" />
            <GradeBage isSelected={false} grade="d" />
          </Row>
          <TextArea
            mt={5}
            bg="white"
            color={Colors.light.subText}
            placeholder={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
            }
          />
        </Column>
        {/* Anteil */}
        <Row justifyContent={"space-between"} mb={8}>
          <Text fontSize={14} fontWeight={"bold"} color={Colors.light.subText}>
            Anteil
          </Text>
          <CustomBadge size="small">
            <Text fontSize={13} fontWeight="bold" color={Colors.light.subText}>
              {value.toFixed(0)}
            </Text>
          </CustomBadge>
        </Row>

        <Slider
          style={{
            marginLeft: -10,
            marginBottom: 15,
          }}
          onValueChange={(value) => setValue(value)}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor={Colors.light.primary}
          minimumTrackTintColor={Colors.light.primary}
          maximumTrackTintColor="#fff"
        />

        <Row justifyContent={"flex-end"} mt={2}>
          <CustomButton title="SAVE" onPress={() => console.log("Pressed")} />
        </Row>
      </CustomModal>
      {/* Filtering the building lists */}
      <CustomModal
        onRequestClose={() => setShowFilterModal(false)}
        visible={showFilterModal}
      >
        <Column pl={"2%"}>
          <Text color={Colors.light.primary} fontWeight="bold" fontSize={18}>
            Gebäudeprüfung FILTERS
          </Text>
          <Box bg={Colors.light.primary} h={1} w={"10"} borderRadius="sm" />
        </Column>

        {/* <Stack.Navigator initialRouteName="filter">
          <Stack.Screen name="filter" component={SettingFilter} />
        </Stack.Navigator> */}
        <SettingFilter />
      </CustomModal>
      <Column
        w={"100%"}
        h={"97%"}
        bg={Colors.light.background}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        justifyContent="center"
        alignItems="center"
      >
        <Row
          w="100%"
          h="7%"
          px={5}
          justifyContent="space-between"
          alignItems="center"
          mt={12}
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
          <IconContainer onPress={() => setShowAddBuildingModal(true)}>
            <SimpleLineIcons name="options-vertical" size={20} color="black" />
          </IconContainer>
        </Row>
        <Row
          w="100%"
          h="7%"
          px={3}
          my={8}
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
            h="80%"
            w="70%"
            px={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize={14} fontWeight="bold" color={Colors.light.primary}>
              1. Geländelflächen
            </Text>
            <CustomBadge size="small">
              <Text fontSize={9} color={Colors.light.text}>
                A
              </Text>
            </CustomBadge>
          </Row>
          <IconContainer>
            <Ionicons name="md-arrow-forward" size={27} color="black" />
          </IconContainer>
        </Row>
        {/* Filter Section */}
        <Row
          w="100%"
          h="8%"
          pl={5}
          pr={6}
          mb={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Row
            w="50%"
            h="70%"
            bg="white"
            borderRadius={5}
            alignItems="center"
            pl={3.5}
          >
            <Image
              source={require("../../../assets/eyeIcon.png")}
              w={5}
              h={5}
              resizeMode="contain"
            />
            <Text fontSize={14} color={Colors.light.subText}>
              {"  "}
              Aktive Baugruppe
            </Text>
          </Row>
          <Row
            w="30%"
            h="70%"
            bg="white"
            borderRadius={5}
            alignItems="center"
            pl={3.5}
            mr={7}
          >
            <Box pt={1}>
              <MaterialIcons name="chat-bubble" size={20} color="#77828e" />
            </Box>
            <Text fontSize={14} color={Colors.light.subText}>
              {"  "}
              Notes
            </Text>
          </Row>
          <FilterButton onPress={() => setShowFilterModal()} />
        </Row>
        <FlatList
          data={[
            {
              title: "Lorem ipsume dolor sit amet",
              des: "Bauart goes here",
              grade: "A",
              value: 100,
              hasImage: true,
            },
            {
              title: "Salvador de amot ichi ikaino",
              des: "The text goes here",
              grade: "A",
              value: 100,
              hasImage: true,
            },
            {
              title: "Lorem ipsume dolor sit amet",
              des: "Bauart goes here",
              grade: "A",
              value: 100,
              hasImage: true,
            },
            {
              title: "Salvador de amot ichi ikaino",
              des: "The text goes here",
              grade: "B",
              value: 70,
              hasImage: false,
            },
            {
              title: "Lorem ipsume dolor sit amet",
              des: "Bauart goes here",
              grade: "C",
              value: 90,
              hasImage: true,
            },
            {
              title: "Salvador de amot ichi ikaino",
              des: "The text goes here",
              hasImage: false,
            },
            {
              title: "Lorem ipsume dolor sit amet",
              des: "Bauart goes here",
              hasImage: true,
            },
            {
              title: "Salvador de amot ichi ikaino",
              des: "The text goes here",
              grade: "A",
              value: 100,
              hasImage: true,
            },
            {
              title: "Lorem ipsume dolor sit amet",
              des: "Bauart goes here",
              grade: "A",
              value: 100,
              hasImage: true,
            },
            {
              title: "Salvador de amot ichi ikaino",
              des: "The text goes here",
              grade: "A",
              value: 100,
              hasImage: true,
            },
          ]}
          keyExtractor={(item, ind) => ind}
          renderItem={({ item }) => (
            <BIListItem
              title={item.title}
              description={item.des}
              grade={item.grade}
              value={item.value}
              hasImage={item.hasImage}
            />
          )}
        />
      </Column>
    </Column>
  );
}

export default BuildingInspection;
