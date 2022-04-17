import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Dimensions } from "react-native";
import {
  CheckIcon,
  Column,
  Row,
  ScrollView,
  Select,
  Switch,
  Text,
} from "native-base";
import { Entypo, EvilIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";
import Layout from "../../constants/Layout";
import IconContainer from "../../components/IconContainer";
import RowIconAndTitleComponent from "./components/RowIconAndTitleComponent";

const size = Layout.window;

function MapStatusScreen(props) {
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
  const [service, setService] = useState("");
  const [value, setValue] = useState(0);
  const [data, setData] = useState(initData);

  const navigation = useNavigation();

  return (
    <Column style={{ backgroundColor: Colors.light.background }}>
      <Row
        justifyContent="space-between"
        marginBottom={20}
        alignItems="center"
        width={size.width * 0.98}
        alignSelf="center"
        mt={5}
      >
        <IconContainer>
          <Entypo name="cross" size={30} color={Colors.light.black} />
        </IconContainer>
        <Row>
          <IconContainer>
            <Ionicons name="camera-sharp" size={24} color="black" />
          </IconContainer>
          <IconContainer>
            <AntDesign name="exclamationcircleo" size={24} color="black" />
          </IconContainer>
        </Row>
      </Row>
      <Column>
        <Text
          style={{ color: Colors.light.primary, marginLeft: 10, fontSize: 14 }}
        >
          WIE 001-001
        </Text>
        <Text
          style={{ color: Colors.light.gray500, marginLeft: 10, fontSize: 12 }}
        >
          Großer Kontrolltermin Fällig in 10 Monaten
        </Text>
      </Column>
      <Column
        style={{
          // alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.light.white,
          marginBottom: 30,
        }}
      >
        <Row
          style={{
            justifyContent: "space-between",
            marginBottom: 10,
            alignItems: "center",
            marginRight: 20,
          }}
        >
          <Text style={{ marginLeft: 15 }}>Status</Text>
          <Text style={{ marginRight: 20 }}>Intervall</Text>
        </Row>
        <Row w="100%" justifyContent="space-between">
          {/* <Picker
                      style={{
                        width: 220,
                        color: "#FFF",
                        backgroundColor: "#000",
                      }}
                      selectedValue={currentSeasone.name}
                      onValueChange={(itemValue, itemIndex) =>
                        setCurrentSeasone(selectSeasonPicker[itemIndex])
                      }
                      dropdownIconColor="#FFF"
                    >
                      {seasons.map((seasonName: any) => (
                        <Picker.Item label={seasonName} value={seasonName} />
                      ))}
                    </Picker>
                    <Picker
                      style={{
                        width: 220,
                        color: "#FFF",
                        backgroundColor: "#000",
                      }}
                      selectedValue={currentSeasone.name}
                      onValueChange={(itemValue, itemIndex) =>
                        setCurrentSeasone(selectSeasonPicker[itemIndex])
                      }
                      dropdownIconColor="#FFF"
                    >
                      {seasons.map((seasonName: any) => (
                        <Picker.Item label={seasonName} value={seasonName} />
                      ))}
                    </Picker> */}
        </Row>
        <Row
          style={{
            marginTop: 25,
            alignItems: "center",
            justifyContent: "space-between",
            // paddingRight: 19,
            width: size.width * 0.97,
            alignContent: "center",
            backgroundColor: Colors.light.gray800,
            height: 60,
            width: size.width * 0.95,
            paddingHorizontal: 10,
            alignSelf: "center",
            borderRadius: 10,
          }}
        >
          <CustomButton
            title="Overview"
            color={Colors.light.gray800}
            Size={size.width * 0.28}
            onPress={() => {
              setData(initData.filter((item) => item.type === "displayed"));
            }}
          />
          <CustomButton
            title="Status"
            color={Colors.light.white}
            Size={size.width * 0.28}
            onPress={() => {
              setData(initData.filter((item) => item.type === "soon"));
            }}
          />
          <CustomButton
            title="Maßnahme"
            Size={size.width * 0.28}
            onPress={() => {
              setData(initData.filter((item) => item.type === "ontime"));
            }}
            color={Colors.light.gray800}
          />
        </Row>
      </Column>
      <SafeAreaView
        style={{ paddingLeft: 15, backgroundColor: Colors.light.white }}
      >
        <RowIconAndTitleComponent title="Symptome Krone" />
        <Row
          bgColor={Colors.light.gray200}
          h={30}
          w={size.width * 0.8}
          justifyContent="space-between"
        >
          <Text>My checklist item</Text>
          <Entypo name="cross" size={24} color={Colors.light.gray500} />
        </Row>
        <Row
          bgColor={Colors.light.gray200}
          h={30}
          w={size.width * 0.8}
          justifyContent="space-between"
          mb={20}
        >
          <Text>My checklist item</Text>
          <Entypo name="cross" size={24} color={Colors.light.gray500} />
        </Row>
        <RowIconAndTitleComponent title="Symptome Krone" />
        <RowIconAndTitleComponent title="Symptome Krone" />
        <RowIconAndTitleComponent title="Symptome Krone" />
        <Text
          style={{
            color: Colors.light.primary,
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          Bewertung
        </Text>
        <Text style={{ color: Colors.light.gray200, marginTop: 10 }}>
          Vitalität
        </Text>
      </SafeAreaView>
    </Column>
  );
}
const styles = StyleSheet.create({
  iconView: {
    width: 35,
    height: 40,
    backgroundColor: Colors.light.white,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginLeft: 10,
  },
  input: {
    width: "80%",
    backgroundColor: Colors.light.white,
    height: 45,
    color: Colors.light.white,
  },
  inputView: {
    width: Dimensions.get("window").width * 0.93,
    flexDirection: "row",
    backgroundColor: Colors.light.white,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    fontSize: 13,
    color: Colors.light.gray800,
    marginBottom: 7,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 18,
    color: Colors.light.gray500,
    fontWeight: "bold",
  },
  row: {
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 50,
  },
});
export default MapStatusScreen;
