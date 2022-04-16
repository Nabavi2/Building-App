import Slider from "@react-native-community/slider";
import { Entypo } from "expo-vector-icons";
import { Box, CheckIcon, Column, Row, Select, Switch, Text } from "native-base";
import React, { useState } from "react";
import CustomBadge from "../../../components/CustomBadge";
import CustomButton from "../../../components/CustomButton";
import Colors from "../../../constants/Colors";

function SettingFilter(props) {
  const [service, setService] = useState("");
  const [value, setValue] = useState(0);
  return (
    <Box>
      <Column pl={"2%"}>
        <Text color={Colors.light.primary} fontWeight="bold" fontSize={18}>
          Gebäudeprüfung FILTERS
        </Text>
        <Box bg={Colors.light.primary} h={1} w={"10"} borderRadius="sm" />
      </Column>
      <Column mb={7} mt={8}>
        <Text
          mb={2}
          fontSize={14}
          fontWeight="bold"
          color={Colors.light.subText}
        >
          Zustand
        </Text>
        <Select
          selectedValue={service}
          placeholder="Choose Service"
          _selectedItem={{
            bg: Colors.light.primary,
            endIcon: <CheckIcon size="5" color="white" />,
            _text: { color: "white" },
            borderRadius: "xl",
          }}
          color="white"
          bg={Colors.light.text}
          borderRadius="xl"
          onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="A" value="A" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      </Column>

      {/* Anteil */}
      <Row justifyContent={"space-between"} mb={8}>
        <Text fontSize={14} fontWeight={"bold"} color={Colors.light.subText}>
          Anteil (min.)
        </Text>
        <CustomBadge size="small">
          <Text fontSize={13} fontWeight="bold" color={Colors.light.subText}>
            {value.toFixed(0)}
          </Text>
        </CustomBadge>
      </Row>

      <Slider
        style={{
          marginLeft: -10,
          marginBottom: 15,
        }}
        value={20}
        onValueChange={(value) => setValue(value)}
        minimumValue={0}
        maximumValue={100}
        thumbTintColor={Colors.light.primary}
        minimumTrackTintColor={Colors.light.primary}
        maximumTrackTintColor="#fff"
      />

      <Row justifyContent={"space-between"} mt={2} mb={10}>
        <Column>
          <Text fontSize={14} fontWeight="bold" color={Colors.light.subText}>
            With image
          </Text>
          <Text fontSize={12} color={Colors.light.subText}>
            Yes
          </Text>
        </Column>
        <Switch
          trackColor={{
            true: Colors.light.primary,
            false: "#9f9f9f",
          }}
          thumbColor="#7d7d7d"
        />
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

export default SettingFilter;
