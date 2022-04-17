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
import CustomFilterIcon from "../../components/CustomFilterIcon";
import MapComponent from "./components/MapComponent";
import GlobalStyles from "../../constants/GlobalStyles";

const size = Layout.window;

function ApartmentScreen(props) {
  const [showModal, setShowModal] = useState(false);
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

  return (
    <Column style={GlobalStyles.container}>
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
          alignItems: "center",
          justifyContent: "space-between",
          width: Dimensions.get("window").width * 0.98,
        }}
      >
        <Box _text={{ marginLeft: 5, marginTop: 3, fontSize: 18 }}>
          Showing all buildings (124)
        </Box>
        <TouchableHighlight
          underlayColor={Colors.light.bageBg}
          under
          style={{
            paddingHorizontal: 5,
            paddingVertical: 1,
            borderRadius: 4,
            marginLeft: 90,
          }}
          onPress={() => setShowModal(!showModal)}
        >
          <CustomFilterIcon />
        </TouchableHighlight>
        <Pressable
          onPress={() => {
            <Image />;
          }}
        ></Pressable>
      </Row>

      <FlatList
        showsVerticalScrollIndicator={true}
        scrollEnabled={true}
        data={initData}
        keyExtractor={(item, id) => id}
        renderItem={({ item }) => {
          return (
            <MapComponent
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
    width: Dimensions.get("window").width * 0.93,
    flexDirection: "row",
    backgroundColor: Colors.light.white,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
});
export default ApartmentScreen;
