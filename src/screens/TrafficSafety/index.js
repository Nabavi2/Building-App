import React, { useState } from "react";
import { StyleSheet, Modal } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { Avatar, Column, FlatList, Image, Row, Text } from "native-base";

import IconContainer from "../../components/IconContainer";
import Colors from "../../constants/Colors";
import GlobalStyles from "../../constants/GlobalStyles";
import TSListItem from "./components/TSListItem";
import CustomModal from "../../components/CustomModal";
import FilterButton from "../../components/FilterButton";
import SettingFilter from "./components/SettingFilter";
import AddBuilding from "./components/AddBuilding";
import SearchBar from "./components/SearchBar";
import DropDown from "react-native-paper-dropdown";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import StatusDropdown from "../../components/StatusDropdown";

function TrafficSafety(props) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showAddBuildingModal, setShowAddBuildingModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
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
        backgroundColor: Colors.light.blue400,
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

      <Column
        w={"100%"}
        h={"97%"}
        bg={Colors.light.background}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        justifyContent="center"
        alignItems="center"
      >
        {/* Top building type sectoin */}
        <Row
          w="100%"
          h="7%"
          pl={5}
          pr={3}
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
            shadow={"0"}
            width={"35%"}
            height={35}
            bg={"white"}
            borderRadius={4}
            px={5}
            justifyContent={"space-around"}
            alignItems="center"
          >
            <Text color={Colors.light.subText}>All phase</Text>
            <AntDesign name="caretdown" size={12} color="black" />
          </Row>

          <StatusDropdown
            title="Show All"
            list={[
              { name: "Gemeldet", color: "#2bdc4d" },
              { name: "On progress", color: "#f3c472" },
              { name: "Streitfall", color: "#7f7f7f" },
              { name: "Abgelehnt", color: "#c04b31" },
              { name: "Behoben", color: "#2b99dc" },
            ]}
            onSelect={(value) => console.log(value)}
          />

          <FilterButton onPress={() => setShowFilterModal()} />
        </Row>
        <FlatList
          data={arrayData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, ind) => ind}
          renderItem={({ item }) => (
            <TSListItem
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
export default TrafficSafety;
