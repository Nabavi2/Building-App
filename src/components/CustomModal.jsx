import { Box, Column, Pressable, ZStack } from "native-base";
import React from "react";
import { Modal } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

function CustomModal({
  children,
  onRequestClose,
  visible,
  isBig = false,
  isMap = false,
  isStatus = false,
}) {
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
          h={isBig ? "8%" : "40%"}
          bg={Colors.light.black}
          onPressIn={onRequestClose}
        />
        <ZStack
          h={isBig ? "92%" : "60%"}
          bg={isStatus ? Colors.light.white : "transparent"}
        >
          <Box w={"100%"} h={"100%"} bg={"black"} opacity={0.2}></Box>
          <Column
            w={"100%"}
            h={"100%"}
            pt={isMap ? 5 : "7%"}
            pl={isBig ? null : isMap ? 0 : "7%"}
            pr={isBig ? null : isMap ? 0 : "10%"}
            bg={Colors.light.ModalBg}
            borderTopLeftRadius={size.width / 18}
            borderTopRightRadius={size.width / 18}
            alignItems={isMap ? "center" : null}
          >
            {children}
          </Column>
        </ZStack>
      </Box>
    </Modal>
  );
}

export default CustomModal;
