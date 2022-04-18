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
import { Row, Box, ScrollView, Column } from "native-base";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
<<<<<<< HEAD
import CustomFilterIcon from "../../components/CustomFilterIcon";
import MapComponent from "./components/MapComponent";
=======
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
import GlobalStyles from "../../constants/GlobalStyles";
import FilterButton from "../../components/FilterButton";
import CustomModal from "../../components/CustomModal";
import FilterModal from "./components/FilterModal";
<<<<<<< HEAD
=======
import MapListItem from "./components/MapListItem";
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f

const size = Layout.window;

function ApartmentScreen(props) {
  const initData = [
    {
      id: "1",
      type: "displayed",
      title: "Frany-Schubert-Str. 2 u Seinsheimstr…",
      subTitle: "VE. 130-300",
      borg: "Würzburg",
    },
    {
      id: "2",
      type: "soon",
      title: "Frany-Schubert-Str. 2 u Seinsheimstr…3",
      subTitle: "VE. 130-300",
      borg: "Würzburg",
    },
    {
      id: "3",
      type: "ontime",
      title: "Frany-Schubert-Str. 2 u Seinsheimstr…",
      subTitle: "VE. 130-300",
      borg: "Würzburg",
    },
    {
      id: "4",
      type: "displayed",
      title: "Frany-Schubert-Str. 2 u Seinsheimstr…",
      subTitle: "VE. 130-300",
      borg: "Würzburg",
    },
    {
      id: "5",
      type: "ontime",
      title: "Frany-Schubert-Str. 2 u Seinsheimstr…",
      subTitle: "VE. 130-300",
      borg: "Würzburg",
    },
    {
      id: "6",
      type: "soon",
      title: "Frany-Schubert-Str. 2 u Seinsheimstr…",
      subTitle: "VE. 130-300",
      borg: "Würzburg",
    },
    {
      id: "7",
      type: "soon",
      title: "Frany-Schubert-Str. 2 u Seinsheimstr…",
      subTitle: "VE. 130-300",
      borg: "Würzburg",
    },
    {
      id: "8",
      type: "soon",
      title: "Frany-Schubert-Str. 2 u Seinsheimstr…",
      subTitle: "VE. 130-300",
      borg: "Würzburg",
    },
  ];

  const navigation = useNavigation();
  const [showFilterModal, setShowFilterModal] = useState(false);

  return (
    <Column style={GlobalStyles.container}>
      <CustomModal
        visible={showFilterModal}
        onRequestClose={() => setShowFilterModal(false)}
      >
        <FilterModal />
      </CustomModal>
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
        style={{
          height: 60,
<<<<<<< HEAD
          paddingHorizontal: 5,
=======
          paddingHorizontal: 10,
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box _text={{ marginLeft: 5, marginTop: 3, fontSize: 18 }}>
          Showing all buildings (124)
        </Box>
<<<<<<< HEAD
        <Box mr={3} justifyContent={"flex-end"}>
=======
        <Box justifyContent={"flex-end"}>
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
          <FilterButton onPress={() => setShowFilterModal(true)} />
        </Box>
      </Row>

      <FlatList
        showsVerticalScrollIndicator={true}
        scrollEnabled={true}
        data={initData}
        keyExtractor={(item, id) => id}
        renderItem={({ item }) => {
          return (
<<<<<<< HEAD
            <MapComponent
=======
            <MapListItem
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
              type={item.type}
              title={item.title}
              subTitle={item.subTitle}
              borg={item.borg}
            />
          );
        }}
      />
    </Column>
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
    marginTop: 10,
<<<<<<< HEAD
=======
    elevation: 0.5,
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
    width: Dimensions.get("window").width * 0.93,
    flexDirection: "row",
    backgroundColor: Colors.light.white,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
});
export default ApartmentScreen;
