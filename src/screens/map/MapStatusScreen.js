import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Dimensions,
  FlatList,
} from "react-native";
import {
  CheckIcon,
  Column,
  Row,
  ScrollView,
  Select,
  Switch,
  Text,
  View,
} from "native-base";
import { Entypo, EvilIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";
import Layout from "../../constants/Layout";
import IconContainer from "../../components/IconContainer";
import RowIconAndTitleComponent from "./components/RowIconAndTitleComponent";
import StatusComponent from "./components/StatusComponent";
import PickerComponent from "./components/PickerComponent";

const size = Layout.window;

function MapStatusScreen(props) {
  const initData = [
    {
      id: "1",
      title: "overview",
    },
    {
      id: "2",
      title: "status",
    },
    {
      id: "2",
      title: "statussdsd",
    },
  ];

  const [data, setData] = useState(initData);

  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: Colors.light.background, flex: 1 }}>
      <Row
        justifyContent="space-between"
        marginBottom={10}
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
      <Column pl={2}>
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
          justifyContent: "center",
          backgroundColor: Colors.light.white,
          height: size.height * 0.2,
          marginBottom: size.height * 0.1,
        }}
      >
        <Row style={styles.dropdownContainer}>
          <Text style={{ marginLeft: 25, fontWeight: "bold" }}>Status</Text>
          <Text
            style={{
              marginRight: size.width * 0.12,
              marginTop: 3,
              fontWeight: "bold",
            }}
          >
            Intervall
          </Text>
        </Row>
        <Row justifyContent="space-between" pr={4}>
          <PickerComponent dataArray={data} width={size.width * 0.6} />
          <PickerComponent dataArray={data} width={size.width * 0.3} />
        </Row>

        <Row style={styles.buttonContainer}>
          <CustomButton
            title="Overview"
            color={Colors.light.gray800}
            Size={size.width * 0.28}
            onPress={() => {
              setData(initData.filter((item) => item.titel === "overview"));
            }}
          />
          <CustomButton
            title="Status"
            color={Colors.light.white}
            Size={size.width * 0.28}
            onPress={() => {
              setData(initData.filter((item) => item.title === "status"));
            }}
          />
          <CustomButton
            title="Maßnahme"
            Size={size.width * 0.28}
            onPress={() => {
              setData(initData.filter((item) => item.title === "status"));
            }}
            color={Colors.light.gray800}
          />
        </Row>
      </Column>

      <StatusComponent />
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "space-between",
    width: size.width * 0.97,
    alignContent: "center",
    backgroundColor: Colors.light.gray800,
    height: 60,
    width: size.width * 0.95,
    paddingHorizontal: 10,
    alignSelf: "center",
    borderRadius: 10,
  },
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
  dropdownContainer: {
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
    marginRight: 20,
    marginTop: size.height * 0.1,
    paddingRight: 13,
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
});
export default MapStatusScreen;
