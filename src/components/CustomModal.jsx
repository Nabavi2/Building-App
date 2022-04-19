import { Box, Column, Pressable, ZStack } from "native-base";
import React from "react";
import Modal from "react-native-modal";
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
      style={{ margin: 0, justifyContent: "flex-end" }}
      onBackButtonPress={onRequestClose}
      onBackdropPress={onRequestClose}
      isVisible={visible}
      onSwipeComplete={() => onRequestClose}
      swipeDirection="down"
    >
      <Column
        w={"100%"}
        h={isBig ? "91%" : "60%"}
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
    </Modal>
  );
}

export default CustomModal;
