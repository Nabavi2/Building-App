import { Entypo, Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Box, CheckIcon, Column, Row, Select, Switch, Text } from "native-base";
import React, { useState } from "react";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from "react-native-popup-menu";
import CustomButton from "../../../components/CustomButton";
import Colors from "../../../constants/Colors";

function FilterModal(props) {
  const [service, setService] = useState("");
  return (
    <MenuProvider>
      <Box>
        <Column pl={"2%"} h={53} mb="10%">
          <Row
            width={"100%"}
            justifyContent="space-between"
            alignItems={"flex-end"}
          >
            <Text color={Colors.light.primary} fontWeight="bold" fontSize={18}>
              Apartments FILTERS
            </Text>
            <Feather name="home" size={30} color={Colors.light.primary} />
          </Row>
          <Box bg={Colors.light.primary} h={1} w={"10"} borderRadius="sm" />
        </Column>

        <Row h="30%">
          <Text fontSize={14} fontWeight="bold" color={Colors.light.subText}>
            Status
          </Text>
          <Menu onSelect={(value) => console.log(value)}>
            <MenuTrigger text="Hslfsdf" />
            <MenuOptions>
              <MenuOption text="sldjf" />
              <MenuOption text="sldssssjf" />
              <MenuOption text="sld" />
            </MenuOptions>
          </Menu>
        </Row>
        <Row h="30%">
          <Text fontSize={14} fontWeight="bold" color={Colors.light.subText}>
            Kundenbetreuer
          </Text>
        </Row>

        <Row justifyContent={"space-between"} mt={2} alignItems={"center"}>
          <Row>
            <Entypo
              name="back-in-time"
              size={24}
              color={Colors.light.primary}
            />
            <Text fontSize={16} color={Colors.light.primary}>
              Reset
            </Text>
          </Row>
          <CustomButton title="Apply" onPress={() => console.log("Pressed")} />
        </Row>
      </Box>
    </MenuProvider>
  );
}

export default FilterModal;
