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

function PopupMenu(props) {
  const navigation = useNavigation();
  return (
    <Menu onSelect={(value) => navigation.navigate("buildingInspection")}>
      <MenuTrigger
        customStyles={{
          triggerWrapper: {
            width: 39,
            height: 39,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.light.white,
            borderRadius: 6,
            marginRight: 20,
            elevation: 1,
          },
        }}
      >
        <Entypo
          name="dots-three-vertical"
          size={24}
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
