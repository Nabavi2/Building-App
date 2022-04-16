import { Box, Column, Row, Slider, Text, TextArea } from "native-base";
import React, { useState } from "react";
import CustomBadge from "../../../components/CustomBadge";
import CustomButton from "../../../components/CustomButton";
import GradeBage from "../../../components/GradeBage";
import Colors from "../../../constants/Colors";

function AddBuilding(props) {
  const [value, setValue] = useState(0);
  return (
    <Box>
      <Column pl={"2%"}>
        <Text color={Colors.light.primary} fontWeight="bold" fontSize={18}>
          SELECT ZUSTAND
        </Text>
        <Box bg={Colors.light.primary} h={1} w={"10"} borderRadius="sm" />
      </Column>
      {/* Bages and text area */}
      <Column my={8}>
        <Row justifyContent={"space-between"} w={"80%"}>
          <GradeBage isSelected={true} grade="A" />
          <GradeBage isSelected={false} grade="b" />
          <GradeBage isSelected={false} grade="c" />
          <GradeBage isSelected={false} grade="d" />
        </Row>
        <TextArea
          shadow={"3"}
          mt={5}
          bg="white"
          color={Colors.light.subText}
          placeholder={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
          }
        />
      </Column>
      {/* Anteil */}
      <Row justifyContent={"space-between"} mb={8}>
        <Text fontSize={14} fontWeight={"bold"} color={Colors.light.subText}>
          Anteil
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
        onValueChange={(value) => setValue(value)}
        minimumValue={0}
        maximumValue={100}
        thumbTintColor={Colors.light.primary}
        minimumTrackTintColor={Colors.light.primary}
        maximumTrackTintColor="#fff"
      />

      <Row justifyContent={"flex-end"} mt={2}>
        <CustomButton title="SAVE" onPress={() => console.log("Pressed")} />
      </Row>
    </Box>
  );
}

export default AddBuilding;
