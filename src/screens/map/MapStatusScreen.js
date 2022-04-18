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
  Button,
  Box,
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
import OverViewComponent from "./components/OverViewComponent";

const size = Layout.window;

function MapStatusScreen(props) {
  const data = [
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

  const [isShowOverView, setIsShowOverView] = useState(false);
  const [isShowStatus, setIsShowStatus] = useState(false);
  const [isShowDatails, setIsShowDetails] = useState(false);
  const [overView, setOverViewClicked] = useState(false);
  const [status, setStatusClicked] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: Colors.light.background, flex: 1 }}>
      <Row
        justifyContent="space-between"
        marginBottom={5}
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
          style={{
            color: Colors.light.gray500,
            marginLeft: 10,
            fontSize: 12,
            marginBottom: 20,
          }}
        >
          Großer Kontrolltermin Fällig in 10 Monaten
        </Text>
      </Column>
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
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    width: size.width * 0.95,
    alignContent: "center",
    backgroundColor: Colors.light.gray800,
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 10,
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
  titleContainer: {
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
    marginRight: 20,
    marginTop: size.height * 0.02,
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
  button: {
    width: size.width * 0.29,
    height: size.height * 0.049,
    backgroundColor: Colors.light.gray800,
    borderRadius: 7,
    marginLeft: 4,
    marginRight: 7,
    marginBottom: 1,
  },
});
export default MapStatusScreen;
