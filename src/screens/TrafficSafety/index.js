import React, { useState } from "react";
import { StyleSheet, Modal } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Column, FlatList, Image, Row, Text } from "native-base";

import IconContainer from "../../components/IconContainer";
import Colors from "../../constants/Colors";
import GlobalStyles from "../../constants/GlobalStyles";
import CustomModal from "../../components/CustomModal";
import FilterButton from "../../components/FilterButton";
import SettingFilter from "./components/SettingFilter";
import AddBuilding from "./components/AddBuilding";
import SearchBar from "./components/SearchBar";
import StatusDropdown from "../../components/StatusDropdown";
import TSListItem from "./components/TSListItem";
import TrafficModal from "./components/TrafficModal";

function TrafficSafety(props) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showAddBuildingModal, setShowAddBuildingModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [visible, setVisible] = useState(false);
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
        isBig={true}
        isTraffic={true}
      >
        <TrafficModal />
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
            <SimpleLineIcons
              name="options-vertical"
              size={20}
              color="black"
              onPressIn={() => setVisible(!visible)}
            />
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
          {/* Notes Button */}

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
        {visible && <TrafficModal visible={true} />}
      </Column>
    </Column>
  );
}

export default TrafficSafety;
