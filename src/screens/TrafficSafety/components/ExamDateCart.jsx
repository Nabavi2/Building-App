import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Row } from "native-base";
import Colors from "../../../constants/Colors";

import Layout from "../../../constants/Layout";

const size = Layout.window;

function ExamDateCart(props) {
  return (
    <View style={styles.container}>
      <Row style={[styles.row, { marginTop: 10 }]}>
        <Text style={styles.text}>Aktiv</Text>
        <Text style={styles.text}>Ja</Text>
      </Row>
      <Row style={styles.row}>
        <Text style={styles.text}>Mangel vorhanden</Text>
        <Text style={styles.text}>Nein</Text>
      </Row>
      <Row style={styles.row}>
        <Text style={styles.text}>Gefahr</Text>
        <Text style={styles.text}>Gefahr</Text>
      </Row>
      <Row style={[styles.row]}>
        <Text style={styles.text}>Gefahr</Text>
        <Text style={styles.text}>sfprotext-regular</Text>
      </Row>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    elevation: 1,
    height: size.height * 0.2,
    width: size.width * 0.94,
    backgroundColor: Colors.light.white,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
    alignSelf: "center",
  },
  row: {
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    color: Colors.light.gray500,
    fontWeight: "700",
  },
});
export default ExamDateCart;
