import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import Colors from "../../../constants/Colors";
<<<<<<< HEAD

function PopupMenu(props) {
  const navigation = useNavigation();
=======
import Layout from "../../../constants/Layout";

function PopupMenu(props) {
  const navigation = useNavigation();
  const { height, width } = Layout.window;
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
  return (
    <Menu onSelect={(value) => navigation.navigate("buildingInspection")}>
      <MenuTrigger
        customStyles={{
          triggerWrapper: {
<<<<<<< HEAD
            width: 39,
            height: 39,
=======
            width: width * 0.074,
            height: height * 0.04,
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.light.white,
            borderRadius: 6,
<<<<<<< HEAD
            marginRight: 20,
=======
            padding: 2,

>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
            elevation: 1,
          },
        }}
      >
        <Entypo
          name="dots-three-vertical"
<<<<<<< HEAD
          size={24}
=======
          size={22}
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
          color={Colors.light.gray900}
        />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsWrapper: { marginVertical: 10 },
          optionWrapper: {
            marginVertical: 5,
            paddingLeft: 25,
            paddingBottom: 10,
            borderBottomWidth: 0.5,
            borderBottomColor: Colors.light.bageBg,
          },
        }}
        optionsContainerStyle={{ borderRadius: 15 }}
      >
        <MenuOption value={1} text="Gebäudeprüfung" />

        <MenuOption value={2} text="Verkehrssicherung" />
        <MenuOption value={3} text="Wohnungen" />
        <MenuOption
          value={3}
          text="Zähler"
          customStyles={{
            optionWrapper: {
              borderBottomColor: "white",
              paddingLeft: 25,
            },
          }}
        />
      </MenuOptions>
    </Menu>
  );
}

export default PopupMenu;
