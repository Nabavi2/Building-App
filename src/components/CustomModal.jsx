import { Box, Column, Pressable, ZStack } from "native-base";
import React from "react";
import { Modal } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

function CustomModal({ children, onRequestClose, visible }) {
  const size = Layout.window;
  return (
    <Modal
      onRequestClose={onRequestClose}
      visible={visible}
      transparent={true}
      animationType="slide"
    >
      <Box bg={"transparent"} w={"100%"} h={"100%"}>
        <Pressable
          opacity={0.2}
          h={"40%"}
          bg={Colors.light.black}
          onPressIn={onRequestClose}
        />
        <ZStack h={"60%"} bg={"transparent"}>
          <Box w={"100%"} h={"100%"} bg={"black"} opacity={0.2}></Box>
          <Column
            w={"100%"}
            h={"100%"}
            pt={"7%"}
            pl={"7%"}
            pr={"10%"}
            bg={Colors.light.ModalBg}
            borderTopLeftRadius={size.width / 18}
            borderTopRightRadius={size.width / 18}
          >
            {children}
          </Column>
        </ZStack>
      </Box>
    </Modal>
  );
}

export default CustomModal;
