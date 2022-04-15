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
import { Row, Box } from "native-base";
import { Entypo, EvilIcons } from "expo-vector-icons";

import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";
import Layout from "../../constants/Layout";
import Displayed from "./conponents/Displayed";
import Ontime from "./conponents/Ontime";
import Soon from "./conponents/Soon";

const size = Layout.window;

function BuildingOverViewScreen(props) {
  const [showModal, setShowModal] = useState(false);

  const openMenu = () => {
    return (
      <Box w="90%" alignItems="center">
        <Menu
          w="190"
          trigger={(triggerProps) => {
            return (
              <Pressable
                accessibilityLabel="More options menu"
                {...triggerProps}
              >
                <HamburgerIcon />
              </Pressable>
            );
          }}
        >
          <Menu.Item>Arial</Menu.Item>
          <Menu.Item>Nunito Sans</Menu.Item>
          <Menu.Item>Roboto</Menu.Item>
          <Menu.Item>Poppins</Menu.Item>
          <Menu.Item>SF Pro</Menu.Item>
          <Menu.Item>Helvetica</Menu.Item>
          <Menu.Item isDisabled>Sofia</Menu.Item>
          <Menu.Item>Cookie</Menu.Item>
        </Menu>
      </Box>
    );
  };
  return (
    <SafeAreaView>
      <Row
        justifyContent="space-between"
        marginBottom={20}
        alignItems="center"
        width={size.width * 0.98}
        alignSelf="center"
        mt={5}
      >
        <Entypo
          name="menu"
          size={24}
          color="black"
          style={{ marginLeft: 10, marginTop: 20 }}
        />
        <Box
          _text={{
            fontSize: 23,
            color: Colors.white,
            marginLeft: 10,
            marginTop: 5,
            fontWeight: "bold",
          }}
        >
          Gebäudeübersicht
        </Box>
        <Box style={styles.iconView}>
          <TouchableHighlight onPress={() => <openMenu />}>
            <Entypo
              name="dots-three-vertical"
              size={24}
              color={Colors.light.gray900}
              style={{ marginTop: 5 }}
            />
          </TouchableHighlight>
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
          paddingLeft: 17,
          marginTop: 25,
          alignItems: "center",
          justifyContent: "space-between",
          // paddingRight: 19,
          width: size.width * 0.97,
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
          }}
          onPress={() => setShowModal(!showModal)}
        >
          {/* <CustomFilterIcon /> */}
          <Box>adsfasfd</Box>
        </TouchableHighlight>
        <Pressable
          onPress={() => {
            <Image />;
          }}
        ></Pressable>
      </Row>

      <FlatList
        keyExtractor={kay.id}
        data={kay}
        renderItem={() => {
          return <Displayed />;
        }}
      />
      {/* <Displayed />
        <Soon />
        <Ontime />
        <Displayed />
        <Soon />
        <Ontime />
        <Displayed />
        <Soon />
        <Ontime />
        <Displayed />
        <Soon />
        <Ontime />
      </ScrollView> */}
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
    width: Dimensions.get("window").width * 0.93,
    flexDirection: "row",
    backgroundColor: Colors.light.white,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
});
export default BuildingOverViewScreen;
