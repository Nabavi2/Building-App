import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Row, Column, Box } from "native-base";
import { SearchBar } from "react-native-elements";
import { Entypo, EvilIcons } from "expo-vector-icons";

import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";
import Layout from "../../constants/Layout";

const size = Layout.window;

function BuildingOverViewScreen(props) {
  return (
    <SafeAreaView>
      <Row justifyContent="space-between" marginBottom={20} alignItems="center">
        <Entypo
          name="menu"
          size={24}
          color="black"
          style={{ marginLeft: 10, marginTop: 20 }}
        />
        <Box
          _text={{
            fontSize: 30,
            color: Colors.white,
            marginLeft: 10,
            marginTop: 5,
            fontWeight: "bold",
          }}
        >
          Statistics
        </Box>
        <Box style={styles.iconView}>
          <Entypo
            name="dots-three-vertical"
            size={24}
            color={Colors.light.gray900}
            style={{ marginTop: 20 }}
          />
        </Box>
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
          secureTextEntry={true}
          keyboardType="default"
        />
      </Row>
      <Row
        style={{
          paddingLeft: 19,
          marginTop: 25,
          alignItems: "center",
          justifyContent: "space-between",
          // alignSelf: "center",
          paddingRight: 19,
        }}
      >
        <CustomButton
          title="29 Displayed"
          color={Colors.light.red}
          Size={size.width * 0.28}
        />
        <CustomButton
          title="18 Soon"
          color={Colors.light.orange}
          Size={size.width * 0.28}
        />
        <CustomButton
          title="77 Ontime"
          color={Colors.light.primary}
          Size={size.width * 0.28}
        />
      </Row>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  iconView: {
    width: 60,
    height: 60,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    backgroundColor: Colors.light.white,
    height: 45,
    color: "#FFF",
  },
  inputView: {
    width: "90%",
    flexDirection: "row",
    backgroundColor: Colors.light.white,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
});
export default BuildingOverViewScreen;
