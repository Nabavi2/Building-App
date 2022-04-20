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

import Layout from "../../../constants/Layout";
import Colors from "../../../constants/Colors";

const size = Layout.window;

function RowButton(props) {
  const [isShowOverView, setIsShowOverView] = useState(false);
  const [isShowStatus, setIsShowStatus] = useState(false);
  const [isShowDatails, setIsShowDetails] = useState(false);
  const [overView, setOverView] = useState(false);
  const [status, setStatus] = useState(false);
  const [details, setDetails] = useState(false);

  return (
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
          //   setOverViewClicked(true);
          setOverView(true);
          setDetails(false);
          setStatus(false);
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
            backgroundColor: status ? Colors.light.white : Colors.light.gray800,
          },
        ]}
        onPress={() => {
          //   setIsShowStatus(true);
          setStatus(true);
          setDetails(false);
          setOverView(false);
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
        style={[
          styles.button,
          {
            backgroundColor: details
              ? Colors.light.white
              : Colors.light.gray800,
          },
        ]}
        title="view"
        onPress={() => {
          //   setIsShowDetails(true);
          setDetails(true);
          setOverView(false);
          setStatus(false);
        }}
      >
        <Text
          style={{
            color: details ? Colors.light.primary : Colors.light.gray500,
            fontWeight: "bold",
          }}
        >
          Details
        </Text>
      </Button>
    </Row>
  );
}
const styles = StyleSheet.create({
  button: {
    width: size.width * 0.29,
    height: size.height * 0.049,
    backgroundColor: Colors.light.gray800,
    borderRadius: 7,
    marginLeft: 4,
    marginRight: 7,
    marginBottom: 1,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    width: size.width * 0.95,
    alignContent: "center",
    backgroundColor: Colors.light.gray800,
    height: size.height * 0.07,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
});
export default RowButton;
