import React, { useState } from "react";
import { TouchableHighlight, StyleSheet, Modal, TextInput } from "react-native";
import {
  EvilIcons,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import {
  Box,
  Column,
  FlatList,
  Image,
  Pressable,
  Row,
  Text,
  ZStack,
} from "native-base";

import IconContainer from "../../components/IconContainer";
import Colors from "../../constants/Colors";
import GlobalStyles from "../../constants/GlobalStyles";
import CustomBadge from "../../components/CustomBadge";
import BIListItem from "./components/BIListItem";
import CustomModal from "../../components/CustomModal";
import FilterButton from "../../components/FilterButton";
import SettingFilter from "./components/SettingFilter";
import Notes from "./components/Notes";
import AddBuilding from "./components/AddBuilding";
import Layout from "../../constants/Layout";
import SearchBar from "./components/SearchBar";

function BuildingInspection(props) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showAddBuildingModal, setShowAddBuildingModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const arrayData = [
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
  ];
  return (
    <Column
      style={{
        ...GlobalStyles.container,
        backgroundColor: Colors.light.primary,
        justifyContent: "flex-end",
      }}
    >
      <Modal
        animationType="fade"
        visible={showSearchBar}
        transparent
        onRequestClose={() => setShowSearchBar(false)}
      >
        <SearchBar onPressOut={() => setShowSearchBar(false)} />
      </Modal>
      {/* Adding Building list Item */}
      <CustomModal
        onRequestClose={() => setShowAddBuildingModal(false)}
        visible={showAddBuildingModal}
      >
        <AddBuilding />
      </CustomModal>
      {/* Filtering the building lists */}
      <CustomModal
        onRequestClose={() => setShowFilterModal(false)}
        visible={showFilterModal}
      >
        <SettingFilter />
      </CustomModal>
      {/* Modal for NOTES */}
      <CustomModal
        onRequestClose={() => setShowNotesModal(false)}
        visible={showNotesModal}
      >
        <Notes />
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
        {/* Top build type sectoin */}
        <Row
          w="100%"
          h="7%"
          px={5}
          justifyContent="space-between"
          alignItems="center"
          mt={12}
        >
          <Row alignItems="center">
            <FontAwesome5 name="building" size={35} color={Colors.light.text} />
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
        {/* Search bar section */}
        <Row
          w="100%"
          h="7%"
          px={3}
          my={8}
          justifyContent="space-around"
          alignItems="center"
        >
          <IconContainer>
            <Ionicons name="md-arrow-back" size={27} color="black" />
          </IconContainer>

          <TouchableHighlight
            underlayColor={Colors.light.bageBg}
            style={styles.searchBar}
            onPress={() => setShowSearchBar(true)}
          >
            <Row
              w={"100%"}
              flex={1}
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Text pl={3} fontSize={14} color={Colors.light.subText}>
                Search...
              </Text>
            </Row>
          </TouchableHighlight>
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
            bg={isActive ? "white" : "#77838f"}
            borderRadius={5}
            alignItems="center"
            pl={3.5}
          >
            <Box shadow={"1"}>
              <Pressable
                flex={1}
                flexDir={"row"}
                alignItems="center"
                onPress={() => setIsActive(!isActive)}
              >
                {isActive ? (
                  <Ionicons name="eye" size={24} color="#77838f" />
                ) : (
                  <Ionicons name="eye-off" size={24} color="white" />
                )}
                <Text
                  fontSize={14}
                  color={isActive ? Colors.light.subText : "white"}
                >
                  {isActive ? "  Aktive Baugruppe" : "  Inaktive Baugruppe"}
                </Text>
              </Pressable>
            </Box>
          </Row>
          {/* Notes Button */}
          <TouchableHighlight
            underlayColor={Colors.light.bageBg}
            style={styles.notesButton}
            onPress={() => setShowNotesModal(true)}
          >
            <Row>
              <Box pt={1}>
                <MaterialIcons name="chat-bubble" size={20} color="#77828e" />
              </Box>
              <Text fontSize={14} color={Colors.light.subText}>
                {"  "}
                Notes
              </Text>
            </Row>
          </TouchableHighlight>
          <FilterButton onPress={() => setShowFilterModal(true)} />
        </Row>
        <FlatList
          data={arrayData}
          showsVerticalScrollIndicator={false}
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

const styles = StyleSheet.create({
  notesButton: {
    elevation: 1,
    width: "30%",
    height: "70%",
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 3.5,
    marginRight: 7,
  },
  searchBar: {
    backgroundColor: "white",
    marginTop: 9,
    borderRadius: 8,
    height: "80%",
    width: "70%",
    paddingHorizontal: 10,
    alignItems: "center",
    elevation: 1,
  },
});
export default BuildingInspection;
