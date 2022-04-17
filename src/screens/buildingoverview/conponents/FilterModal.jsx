import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Box, CheckIcon, Column, Row, Select, Switch, Text } from "native-base";
import React, { useState } from "react";
import CustomButton from "../../../components/CustomButton";
import Colors from "../../../constants/Colors";

function FilterModal(props) {
  const [service, setService] = useState("");
  return (
    <Box>
      <Column pl={"2%"} h={53} mb="10%">
        <Row
          width={"100%"}
          justifyContent="space-between"
          alignItems={"flex-end"}
        >
          <Text color={Colors.light.primary} fontWeight="bold" fontSize={18}>
            Building FILTERS
          </Text>
          <FontAwesome5
            name="building"
            size={30}
            color={Colors.light.primary}
          />
        </Row>
        <Box bg={Colors.light.primary} h={1} w={"10"} borderRadius="sm" />
      </Column>

      <Row h="30%">
        <Text fontSize={14} fontWeight="bold" color={Colors.light.subText}>
          City
        </Text>
      </Row>
      <Row h="30%">
        <Text fontSize={14} fontWeight="bold" color={Colors.light.subText}>
          Date
        </Text>
      </Row>

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

export default FilterModal;
