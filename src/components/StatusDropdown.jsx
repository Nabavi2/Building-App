import { AntDesign } from "@expo/vector-icons";
import { Avatar, Row, Text } from "native-base";
import React, { useState } from "react";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import Colors from "../constants/Colors";

function StatusDropdown({ title, list, onSelect }) {
  const [currentValue, setCurrentValue] = useState({
    name: title,
    color: null,
  });
  return (
    <Menu
      onSelect={(val) => {
        setCurrentValue(val);
        val.name !== title && onSelect(val);
      }}
    >
      <MenuTrigger
        customStyles={{
          triggerWrapper: {
            backgroundColor: "white",
            borderRadius: 4,
            elevation: 0.5,
          },
        }}
      >
        <Row
          width={140}
          height={35}
          alignItems="center"
          justifyContent={
            currentValue.name === title ? "space-between" : "flex-start"
          }
          px={3}
        >
          {currentValue.name !== title && (
            <Avatar size={3} bg={currentValue.color} mr={3} />
          )}
          <Text fontSize={14} color={Colors.light.subText}>
            {currentValue.name}
          </Text>
          {currentValue.name === title && (
            <AntDesign name="caretdown" size={12} color="black" />
          )}
        </Row>
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: {
            borderRadius: 6,
            paddingHorizontal: 5,
            paddingVertical: 10,
          },
        }}
      >
        <MenuOption value={{ name: title, color: null }}>
          <Row alignItems={"center"} ml={3} my={1}>
            <Text fontSize={15} color={Colors.light.subText}>
              {title}
            </Text>
          </Row>
        </MenuOption>
        {list.map((item) => (
          <MenuOption value={item}>
            <Row alignItems={"center"} ml={3} my={1}>
              <Avatar size={"3"} bg={item.color} mr={3} />
              <Text fontSize={15} color={Colors.light.subText}>
                {item.name}
              </Text>
            </Row>
          </MenuOption>
        ))}
      </MenuOptions>
    </Menu>
  );
}

export default StatusDropdown;
