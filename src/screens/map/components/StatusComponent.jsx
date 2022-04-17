import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Row, ScrollView, Text, View } from "native-base";
import { Entypo, EvilIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";
import RowIconAndTitleComponent from "./RowIconAndTitleComponent";

const size = Layout.window;

function StatusComponent({ type }) {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingLeft: 15,
        backgroundColor: Colors.light.white,
        marginBottom: 200,
        paddingBottom: 20,
        marginTop: 30,
      }}
    >
      <RowIconAndTitleComponent title="Symptome Krone" />
      <Row style={styles.row}>
        <Text style={{ color: Colors.light.gray500, fontWeight: "bold" }}>
          My checklist item
        </Text>
        <Entypo name="cross" size={24} color={Colors.light.gray500} />
      </Row>
      <Row style={styles.row}>
        <Text style={{ color: Colors.light.gray500, fontWeight: "bold" }}>
          My checklist item
        </Text>
        <Entypo name="cross" size={24} color={Colors.light.gray500} />
      </Row>
      <RowIconAndTitleComponent title="Symptome Krone" />
      <RowIconAndTitleComponent title="Symptome Krone" />
      <RowIconAndTitleComponent title="Symptome Krone" />
      <RowIconAndTitleComponent title="Symptome Krone" />
      <RowIconAndTitleComponent title="Symptome Krone" />
      <RowIconAndTitleComponent title="Symptome Krone" />
      <RowIconAndTitleComponent title="Symptome Krone" />
      <RowIconAndTitleComponent title="Symptome Krone" />
      <RowIconAndTitleComponent title="Symptome Krone" />
      <Text
        style={{
          color: Colors.light.primary,
          marginTop: 10,
          marginBottom: 20,
          fontSize: 17,
          marginLeft: 10,
        }}
      >
        Bewertung
      </Text>
      <Text
        style={{ color: Colors.light.gray500, marginTop: 10, marginLeft: 10 }}
      >
        Vitalität
      </Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  row: {
    backgroundColor: Colors.light.gray200,
    height: 38,
    width: size.width * 0.87,
    justifyContent: "space-between",
    alignSelf: "center",
    marginBottom: 27,
    marginRight: 10,
    alignItems: "center",
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: 5,
  },
});
export default StatusComponent;
