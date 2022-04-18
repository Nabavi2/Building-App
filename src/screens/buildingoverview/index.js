import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableHighlight,
  FlatList,
  Pressable,
} from "react-native";
import { Row, Box, ScrollView, Text, Divider } from "native-base";
import { Entypo, EvilIcons, Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";
import Layout from "../../constants/Layout";
<<<<<<< HEAD
import OverViewComponent from "./conponents/OverViewComponent";
import CustomFilterIcon from "../../components/CustomFilterIcon";
import GlobalStyles from "../../constants/GlobalStyles";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from "react-native-popup-menu";
=======
import GlobalStyles from "../../constants/GlobalStyles";
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
import IconContainer from "../../components/IconContainer";
import PopupMenu from "./conponents/PopupMenu";
import FilterButton from "../../components/FilterButton";
import CustomModal from "../../components/CustomModal";
import FilterModal from "./conponents/FilterModal";
<<<<<<< HEAD
=======
import OVListItem from "./conponents/OVListItem";
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f

function BuildingOverViewScreen(props) {
  const size = Layout.window;
  const initData = [
    {
      id: "1",
      type: "displayed",
      title: "Am Schawrzenberg 19, 21, 23",
      subTitle: "VE. 130-300",
      borg: "Würzburg",
    },
    {
      id: "2",
      type: "soon",
      title: "Am Schawrzenberg 19, 21, 23",
      subTitle: "VE. 130-300",
      borg: "Würzburg",
    },
    {
      id: "3",
      type: "ontime",
      title: "Am Schawrzenberg 19, 21, 23",
      subTitle: "VE. 130-300",
      borg: "Würzburg",
    },
    {
      id: "4",
      type: "displayed",
      title: "Am Schawrzenberg 19, 21, 23",
      subTitle: "VE. 130-300",
      borg: "Würzburg",
    },
    {
      id: "5",
      type: "ontime",
      title: "Am Schawrzenberg 19, 21, 23",
      subTitle: "VE. 130-300",
      borg: "Würzburg",
    },
    {
      id: "6",
      type: "soon",
      title: "Am Schawrzenberg 19, 21, 23",
      subTitle: "VE. 130-300",
      borg: "Würzburg",
    },
    {
      id: "7",
      type: "soon",
      title: "Am Schawrzenberg 19, 21, 23",
      subTitle: "VE. 130-300",
      borg: "Würzburg",
    },
    {
      id: "8",
      type: "soon",
      title: "Am Schawrzenberg 19, 21, 23",
      subTitle: "VE. 130-300",
      borg: "Würzburg",
    },
  ];
  const [data, setData] = useState(initData);

  const navigation = useNavigation();
  const [showFilterModal, setShowFilterModal] = useState(false);

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <CustomModal
        visible={showFilterModal}
        onRequestClose={() => setShowFilterModal(false)}
      >
        <FilterModal />
      </CustomModal>
      <Row
        w={"95%"}
        alignItems="flex-end"
        justifyContent="space-between"
        h={"8.85%"}
<<<<<<< HEAD
        // bg="red.300"
=======
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
      >
        <Box h="73%">
          <IconContainer
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Ionicons name="menu" size={24} color={Colors.light.gray900} />
          </IconContainer>
        </Box>
        <Text fontWeight={"bold"} fontSize={16} color={Colors.light.text}>
          Gebäudeübersicht
        </Text>
        <PopupMenu />
      </Row>
      <Row style={styles.inputView}>
        <EvilIcons
          name="search"
          size={40}
          color={Colors.light.gray500}
          style={{ margin: 10 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={Colors.light.gray500}
          keyboardType="default"
        />
      </Row>
      <Row
        px={3}
        marginTop={25}
        alignItems="center"
        justifyContent="space-between"
        width={size.width * 0.99}
      >
        <CustomButton
          title="29 Displayed"
          color={Colors.light.red}
          size={"30%"}
          onPress={() => {
            setData(initData.filter((item) => item.type === "displayed"));
          }}
        />
        <CustomButton
          title="18 Soon"
          color={Colors.light.orange}
          size={"30%"}
          onPress={() => {
            setData(initData.filter((item) => item.type === "soon"));
          }}
        />
        <CustomButton
          title="77 Ontime"
          size={"30%"}
          onPress={() => {
            setData(initData.filter((item) => item.type === "ontime"));
          }}
          color={Colors.light.primary}
        />
      </Row>
      <Row
        style={{
          height: 60,
          alignItems: "center",
          justifyContent: "space-between",
          width: Dimensions.get("window").width * 0.98,
        }}
      >
        <Box _text={{ marginLeft: 5, marginTop: 3, fontSize: 18 }}>
          Showing all buildings (124)
        </Box>

        <Box mr={3}>
          <FilterButton onPress={() => setShowFilterModal(true)} />
        </Box>
      </Row>
      <ScrollView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item, id) => id}
          renderItem={({ item }) => {
            return (
              <OVListItem
                type={item.type}
                title={item.title}
                subTitle={item.subTitle}
                borg={item.borg}
              />
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  iconView: {
    width: 45,
    height: 50,
    backgroundColor: Colors.light.white,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    marginRight: 8,
  },
  input: {
    width: "80%",
    backgroundColor: Colors.light.white,
    height: 45,
    color: "#FFF",
  },
  inputView: {
    marginTop: 15,
    width: Dimensions.get("window").width * 0.93,
    flexDirection: "row",
    backgroundColor: Colors.light.white,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    elevation: 1,
  },
});
export default BuildingOverViewScreen;
