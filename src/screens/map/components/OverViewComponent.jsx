import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Dimensions } from "react-native";
import { Column, Row, ScrollView, Text } from "native-base";
import { Entypo, EvilIcons, AntDesign, Ionicons } from "@expo/vector-icons";

import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

const size = Layout.window;

function OverViewComponent(props) {
  return (
    <ScrollView
      style={{ paddingLeft: 15, backgroundColor: Colors.light.white }}
    >
      <Text style={styles.text}>Baum Type</Text>
      <Text style={[styles.subText, { marginBottom: 20 }]}>
        Betule pendula Weiss-/Sandbirke
      </Text>
      <Text style={styles.text}>Standortbeschreibung</Text>
      <Text style={[styles.subText, { marginBottom: 20 }]}>Garage</Text>
      <Text style={styles.text}>Pflanyjahr</Text>
      <Text style={[styles.subText, { marginBottom: 20 }]}>1997</Text>
      <Text
        style={[
          styles.subText,
          { color: Colors.light.primary, marginBottom: 20 },
        ]}
      >
        Prünfungsdaten
      </Text>
      <Text style={styles.text}>Gegenstand</Text>
      <Text style={[styles.subText, { marginBottom: 20 }]}>
        Großes Kantrolltermin
      </Text>
      <Text style={styles.text}> Kategorie</Text>
      <Text style={[styles.subText, { marginBottom: 20 }]}>
        Großes Kantrolltermin
      </Text>
      <Row style={styles.row}>
        <Column style={{ marginRight: 40 }}>
          <Text style={styles.text}>Letzte Prüfung</Text>
          <Text style={styles.subText}>06.03.2020</Text>
        </Column>
        <Column>
          <Text style={styles.text}>Letzte Prüfung</Text>
          <Text style={styles.subText}>06.03.2021</Text>
        </Column>
      </Row>
      <Text style={[styles.subText, { color: Colors.light.primary }]}>
        Another section
      </Text>
      <Text style={styles.text}>Title sample</Text>
      <Text style={styles.text}> Kategorie</Text>
      <Text style={styles.subText}> Großes Kantrolltermin</Text>
      <Row style={styles.row}>
        <Column>
          <Text style={styles.text}>Letzte Prüfung</Text>
          <Text style={styles.subText}>06.03.2020</Text>
        </Column>
        <Column style={{ marginRight: 20 }}>
          <Text style={styles.text}>Letzte Prüfung</Text>
          <Text style={styles.subText}>06.03.2021</Text>
        </Column>
      </Row>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "space-between",
    width: size.width * 0.97,
    alignContent: "center",
    backgroundColor: Colors.light.gray800,
    height: 60,
    width: size.width * 0.95,
    paddingHorizontal: 10,
    alignSelf: "center",
    borderRadius: 10,
  },
  iconView: {
    width: 35,
    height: 40,
    backgroundColor: Colors.light.white,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginLeft: 10,
  },
  input: {
    width: "80%",
    backgroundColor: Colors.light.white,
    height: 45,
    color: Colors.light.white,
  },
  dropdownContainer: {
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
    marginRight: 20,
    marginTop: size.height * 0.1,
    paddingRight: 13,
  },
  inputView: {
    width: Dimensions.get("window").width * 0.93,
    flexDirection: "row",
    backgroundColor: Colors.light.white,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    fontSize: 13,
    color: Colors.light.gray800,
    marginBottom: 7,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 18,
    color: Colors.light.gray500,
    fontWeight: "bold",
  },
});
export default OverViewComponent;
