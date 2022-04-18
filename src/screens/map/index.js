import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { Row, Box, Column, Pressable } from "native-base";
import { EvilIcons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import CustomModal from "../../components/CustomModal";
import MapModalComponent from "./components/MapModalComponent";
import FilterButton from "../../components/FilterButton";

const size = Layout.window;

function MapScreen(props) {
<<<<<<< HEAD
  const mapModalSearchData = [
    {
      id: "1",
      title: "WIE 001-001",
      subTitle: "Crataegus laevigata P… Echter Rotdorn",
    },
    {
      id: "2",
      title: "WIE 001-001",
      subTitle: "Crataegus laevigata ‘P… Echter Rotdorn",
    },
    {
      id: "3",
      title: "WIE 001-001",
      subTitle: "Crataegus laevigata P… Echter Rotdorn",
    },
    {
      id: "4",
      title: "WIE 001-001",
      subTitle: "Crataegus laevigata ‘P… Echter Rotdorn",
    },
  ];
  const mapModalData = [
=======
  const initData = [
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
    {
      id: "1",
      title: "Building street here",
      number: "216",
      subTitle: "Stadtteil",
    },
    {
      id: "2",
      title: "Building street here",
      number: "216",
      subTitle: "Stadtteil",
    },
    {
      id: "3",
      title: "Building street here",
      number: "216",
      subTitle: "Stadtteil",
    },
<<<<<<< HEAD

=======
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
    {
      id: "4",
      title: "Building street here",
      number: "216",
      subTitle: "Stadtteil",
    },
    {
      id: "5",
      title: "Building street here",
      number: "216",
      subTitle: "Stadtteil",
    },
    {
      id: "6",
      title: "Building street here",
      number: "216",
      subTitle: "Stadtteil",
    },
<<<<<<< HEAD
  ];
  const [visible, setVisible] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
=======
    {
      id: "7",
      title: "Building street here",
      number: "216",
      subTitle: "Stadtteil",
    },
  ];
  const [visible, setVisible] = useState(false);
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f

  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      source={require("../../../assets/map3.png")}
    >
      <Column
        style={{
          backgroundColor: Colors.light.background,
          height: 100,
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          borderRadius: 25,
        }}
      >
        <CustomModal
          onRequestClose={() => setVisible(false)}
          visible={visible}
          isMap={true}
        >
          <Pressable
            alignSelf="center"
            marginBottom={5}
            height={1.5}
<<<<<<< HEAD
            width={size.width * 0.17}
=======
            width={size.width * 0.05}
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
            backgroundColor={Colors.light.gray500}
            borderRadius={4}
            onPressIn={() => setVisible(!visible)}
          ></Pressable>
          <Row style={styles.inputView}>
            <EvilIcons
              name="search"
              size={35}
              color={Colors.light.background}
            />
            <TextInput
              style={styles.input}
              placeholder="Search here"
              placeholderTextColor={Colors.light.gray500}
              keyboardType="default"
            />
            <Pressable
              style={{
                backgroundColor: Colors.light.gray900,
                height: 39,
                width: 39,
                alignSelf: "center",
                alignItems: "center",
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <FilterButton color={Colors.light.background} />
            </Pressable>
          </Row>
          <Column>
            <FlatList
<<<<<<< HEAD
              data={mapModalData}
=======
              data={initData}
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
              keyExtractor={(item, id) => id}
              renderItem={({ item }) => {
                return (
                  <MapModalComponent
                    title={item.title}
                    number={item.number}
                    subTitle={item.subTitle}
                  />
                );
              }}
            />
<<<<<<< HEAD
            {/* <FlatList
              data={mapModalSearchData}
              keyExtractor={(item, id) => id}
              renderItem={({ item }) => {
                return (
                  <MapModalComponent
                    title={item.title}
                    subTitle={item.subTitle}
                  />
                );
              }}
            /> */}
=======
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
          </Column>
        </CustomModal>
        <Pressable
          style={{
            marginTop: 15,
            marginBottom: 20,
            height: 5,
            width: size.width * 0.2,
            backgroundColor: Colors.light.gray500,
            borderRadius: 4,
          }}
          onPressIn={() => setVisible(!visible)}
        ></Pressable>
        <Row style={styles.inputView}>
          <EvilIcons name="search" size={35} color={Colors.light.background} />
          <TextInput
            style={styles.input}
            placeholder="Search here"
            placeholderTextColor={Colors.light.gray500}
            keyboardType="default"
          />
          <Pressable
            style={{
              backgroundColor: Colors.light.background,
              height: 39,
              width: 39,
              alignSelf: "center",
              alignItems: "center",
              // marginRight: 10,
              borderRadius: 10,
              justifyContent: "center",
            }}
<<<<<<< HEAD
            onPress={() => {
              setVisible(!visible);
              setIsSearch(!isSearch);
            }}
=======
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
          >
            <Column>
              <Image source={require("../../../assets/path7.png")} />
              <Image source={require("../../../assets/path8.png")} />
            </Column>
          </Pressable>
        </Row>
      </Column>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  inputView: {
    width: size.width * 0.93,
    flexDirection: "row",
    backgroundColor: Colors.light.gray900,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 20,
    height: 47,
  },
  input: {
    width: "74%",
    backgroundColor: Colors.light.gray900,
    height: 45,
    color: Colors.light.white,
    marginRight: 10,
  },
});
export default MapScreen;
