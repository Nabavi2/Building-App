import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Column, Row } from "native-base";

import CustomModal from "../../../components/CustomModal";
import Colors from "../../../constants/Colors";

function TrafficModal(props) {
  cosnt[(visible, setVisible)] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <CustomModal
        onRequestClose={() => setVisible(false)}
        visible={visible}
        isBig={true}
      >
        <Pressable
          alignSelf="center"
          marginBottom={5}
          height={1.5}
          width={size.width * 0.17}
          backgroundColor={Colors.light.gray500}
          borderRadius={4}
          onPressIn={() => setVisible(!visible)}
        ></Pressable>
        <Row style={styles.inputView}>
          <EvilIcons name="search" size={35} color={Colors.light.background} />
          <TextInput
            style={styles.input}
            placeholder="Search here"
            placeholderTextColor={Colors.light.gray500}
            keyboardType="default"
          />
          <Pressable
            style={{
              backgroundColor: Colors.light.gray900,
              height: 39,
              width: 39,
              alignSelf: "center",
              alignItems: "center",
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <FilterButton color={Colors.light.background} />
          </Pressable>
        </Row>
      </CustomModal>
    </View>
  );
}

export default TrafficModal;
