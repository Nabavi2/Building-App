import React, { useState } from "react";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Column, FlatList, Pressable, Row, Text } from "native-base";
import Modal from "react-native-modal";

import IconContainer from "../../components/IconContainer";
import Colors from "../../constants/Colors";
import GlobalStyles from "../../constants/GlobalStyles";
import CustomModal from "../../components/CustomModal";
import FilterButton from "../../components/FilterButton";
import SettingFilter from "./components/SettingFilter";
import AddBuilding from "./components/AddBuilding";
import StatusDropdown from "../../components/StatusDropdown";
import TSListItem from "./components/TSListItem";
import TrafficModal from "./components/TrafficModal";

function TrafficSafety(props) {
  const [showChecks, setShowChecks] = useState(false);
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
        style={{
          margin: 0,
          justifyContent: "flex-end",
        }}
        backdropColor="transparent"
        isVisible={showChecks}
        onSwipeComplete={() => setShowChecks(false)}
        swipeDirection="down"
        onBackdropPress={() => setShowChecks(false)}
      >
        <Row
          bottom={0}
          justifyContent="space-between"
          alignItems="center"
          h={"10%"}
          px={"10%"}
          style={{ backgroundColor: Colors.light.gray800 }}
        >
          <Pressable
            onPress={() => setShowChecks(false)}
            h={"50%"}
            w={"30%"}
            justifyContent={"center"}
            alignItems="center"
          >
            <Text fontSize={16} fontWeight="bold" ml={2} color={"white"}>
              CANCEL
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setShowChecks(false)}
            bg={Colors.light.green100}
            h={"50%"}
            w={"40%"}
            borderRadius={5}
            justifyContent={"center"}
            alignItems="center"
          >
            <Row>
              <FontAwesome name="check" size={24} color="white" />
              <Text fontSize={16} fontWeight="bold" ml={2} color={"white"}>
                Geprüft (4)
              </Text>
            </Row>
          </Pressable>
        </Row>
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
          <Row
            alignItems={"center"}
            justifyContent="space-around"
            px={2.5}
            shadow={"0"}
            w={"40%"}
            h={"60%"}
            bg={"white"}
            borderRadius={4}
          >
            <Text fontSize={14} color={Colors.light.subText}>
              Alle Phase
            </Text>
            <AntDesign
              name="caretdown"
              size={12}
              color={Colors.light.subText}
            />
          </Row>
          <StatusDropdown
            title={"Jeder status"}
            list={[
              { name: "Gemeldet", color: "#2bdc4d" },
              { name: "On progress", color: "#f3c472" },
              { name: "Streitfall", color: "#7f7f7f" },
              { name: "Abgelehnt", color: "#c04b31" },
              { name: "Behoben", color: "#2b99dc" },
            ]}
            onSelect={(value) => console.log(value)}
          />

          <FilterButton onPress={() => setShowFilterModal(true)} />
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
              onCheck={() => setShowChecks(true)}
            />
          )}
        />
        {visible && <TrafficModal visible={true} />}
      </Column>
    </Column>
  );
}

export default TrafficSafety;
