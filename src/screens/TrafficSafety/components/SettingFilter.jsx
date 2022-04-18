import Slider from "@react-native-community/slider";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Box, CheckIcon, Column, Row, Select, Switch, Text } from "native-base";
import React, { useState } from "react";
import CustomBadge from "../../../components/CustomBadge";
import CustomButton from "../../../components/CustomButton";
import Colors from "../../../constants/Colors";
import FilterItem from "./FilterItem";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from "react-native-popup-menu";
<<<<<<< HEAD

function SettingFilter(props) {
  const [value, setValue] = useState("Any");
=======
import { Modal } from "react-native";
import { Picker } from "@react-native-picker/picker";

function SettingFilter(props) {
  const [value, setValue] = useState("Any");
  console.log(value);

>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
  return (
    <Box>
      <Column pl={"2%"}>
        <Text color={Colors.light.blue400} fontWeight="bold" fontSize={18}>
          VKS FILTERS
        </Text>
        <Box bg={Colors.light.blue400} h={1} w={"10"} borderRadius="sm" />
      </Column>
      <Row mb={3} mt={4} alignItems="center" justifyContent="space-between">
        <Text
          mb={2}
          fontSize={14}
          fontWeight="bold"
          color={Colors.light.subText}
        >
          Aktiv
        </Text>
<<<<<<< HEAD
        <Box w={33} height={43} bg="amber.400"></Box>
=======

        <Box
          shadow={"0"}
          borderRadius="md"
          pl={1}
          height={50}
          justifyContent="center"
        >
          <Picker
            dropdownIconColor={"black"}
            mode="dropdown"
            selectedValue={value}
            onValueChange={(val) => setValue(val)}
            style={{
              width: 110,
            }}
            itemStyle={{
              borderRadius: 59,
            }}
          >
            <Picker.Item label="Any" value={"Any"} />
            <Picker.Item label="Ja" value={"Ja"} />
            <Picker.Item label="Nein" value={"Nein"} />
          </Picker>
        </Box>
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
      </Row>

      <FilterItem title="Mängel vorhanden" subtitle={"Yes"} />
      <FilterItem title="Mängel vorhanden" subtitle={"Nien"} />
      <FilterItem title="Mängel vorhanden" subtitle={"Nien"} />
      <FilterItem title="Mängel vorhanden" subtitle={"Yes"} />

      <Row justifyContent={"space-between"} mt={2} alignItems={"center"}>
        <Row>
          <Entypo name="back-in-time" size={24} color={Colors.light.primary} />
          <Text fontSize={16} color={Colors.light.primary}>
            Reset
          </Text>
        </Row>
        <CustomButton title="Apply" onPress={() => console.log("Pressed")} />
      </Row>
    </Box>
  );
}

export default SettingFilter;
