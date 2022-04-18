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
<<<<<<< HEAD
  Button,
  Box,
=======
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
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
<<<<<<< HEAD
import OverViewComponent from "./components/OverViewComponent";
=======
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f

const size = Layout.window;

function MapStatusScreen(props) {
<<<<<<< HEAD
  const data = [
=======
  const initData = [
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
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

<<<<<<< HEAD
  const [isShowOverView, setIsShowOverView] = useState(false);
  const [isShowStatus, setIsShowStatus] = useState(false);
  const [isShowDatails, setIsShowDetails] = useState(false);
  const [overView, setOverViewClicked] = useState(false);
  const [status, setStatusClicked] = useState(false);
=======
  const [data, setData] = useState(initData);
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f

  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: Colors.light.background, flex: 1 }}>
      <Row
        justifyContent="space-between"
<<<<<<< HEAD
        marginBottom={5}
=======
        marginBottom={20}
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
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
<<<<<<< HEAD
      <Column pl={2}>
=======
      <Column>
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
        <Text
          style={{ color: Colors.light.primary, marginLeft: 10, fontSize: 14 }}
        >
          WIE 001-001
        </Text>
        <Text
<<<<<<< HEAD
          style={{
            color: Colors.light.gray500,
            marginLeft: 10,
            fontSize: 12,
            marginBottom: 20,
          }}
=======
          style={{ color: Colors.light.gray500, marginLeft: 10, fontSize: 12 }}
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
        >
          Großer Kontrolltermin Fällig in 10 Monaten
        </Text>
      </Column>
<<<<<<< HEAD
      <View style={{ backgroundColor: Colors.light.white }}>
        <Column
          style={{
            justifyContent: "center",
            backgroundColor: Colors.light.white,
            height: size.height * 0.2,
            marginBottom: size.height * 0.02,
          }}
        >
          <Row style={styles.titleContainer}>
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
          <Row justifyContent="space-between" pr={4} pl={1}>
            <PickerComponent dataArray={data} width={size.width * 0.6} />
            <PickerComponent dataArray={data} width={size.width * 0.3} />
          </Row>
        </Column>
        <Row style={styles.buttonContainer}>
          <Button
            style={[
              styles.button,
              {
                backgroundColor: overView
                  ? Colors.light.white
                  : Colors.light.gray800,
              },
            ]}
            title="view"
            onPress={() => {
              setOverViewClicked(true);
              setIsShowOverView(true);
              setIsShowStatus(false);
              setStatusClicked(false);
            }}
          >
            <Text
              style={{
                color: overView ? Colors.light.primary : Colors.light.gray500,
                fontWeight: "bold",
              }}
            >
              overview
            </Text>
          </Button>

          <Button
            style={[
              styles.button,
              {
                backgroundColor: status
                  ? Colors.light.white
                  : Colors.light.gray800,
              },
            ]}
            onPress={() => {
              setOverViewClicked(false);
              setStatusClicked(true);
              setIsShowOverView(false);
              setIsShowStatus(true);
            }}
          >
            <Text
              style={{
                color: status ? Colors.light.primary : Colors.light.gray500,
                fontWeight: "bold",
              }}
            >
              Status
            </Text>
          </Button>

          <Button
            style={styles.button}
            title="view"
            onPress={() => {
              setIsShowOverView(true);
              setIsShowStatus(false);
            }}
          >
            <Text style={{ color: Colors.light.gray500, fontWeight: "bold" }}>
              Maßnahme
            </Text>
          </Button>
        </Row>
      </View>

      {isShowOverView && <OverViewComponent />}
      {isShowStatus && <StatusComponent />}
=======
      <Column
        style={{
          justifyContent: "center",
          backgroundColor: Colors.light.white,
          height: size.height * 0.2,
          marginBottom: size.height * 0.1,
        }}
      >
        <Row style={styles.dropdownContainer}>
          <Text style={{ marginLeft: 15, fontWeight: "bold" }}>Status</Text>
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
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
<<<<<<< HEAD
    alignItems: "center",
    justifyContent: "space-between",
    width: size.width * 0.95,
    alignContent: "center",
    backgroundColor: Colors.light.gray800,
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 10,
=======
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
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
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
<<<<<<< HEAD
  titleContainer: {
=======
  dropdownContainer: {
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
    marginRight: 20,
<<<<<<< HEAD
    marginTop: size.height * 0.02,
=======
    marginTop: size.height * 0.1,
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
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
<<<<<<< HEAD
  button: {
    width: size.width * 0.29,
    height: size.height * 0.049,
    backgroundColor: Colors.light.gray800,
    borderRadius: 7,
    marginLeft: 4,
    marginRight: 7,
    marginBottom: 1,
  },
=======
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
});
export default MapStatusScreen;
