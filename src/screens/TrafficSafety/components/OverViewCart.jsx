import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Column, Row } from "native-base";

import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

const size = Layout.window;

function OverViewCart(props) {
  return (
    <View style={styles.container}>
      <Column style={{ paddingLeft: 10 }}>
        <Row style={[styles.row, { marginTop: 10 }]}>
          <Column>
            <Text style={styles.text}>Vorgangsnr.</Text>
            <Text style={[styles.text, { fontSize: 12 }]}>728_TH61</Text>
          </Column>
        </Row>
        <Row style={styles.row}>
          <Column>
            <Text style={styles.text}>Pflicht</Text>
            <Text style={[styles.text, { fontSize: 12 }]}>Fluchttüren</Text>
          </Column>
        </Row>
        <Row style={styles.row}>
          <Column>
            <Text style={styles.text}>Prüfungsart</Text>
            <Text style={[styles.text, { fontSize: 12 }]}>Sichtprüfung</Text>
          </Column>
        </Row>
      </Column>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    elevation: 0.6,
    height: size.height * 0.24,
    width: size.width * 0.94,
    backgroundColor: Colors.light.white,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    alignSelf: "center",
  },
  row: {
    justifyContent: "flex-start",
    marginBottom: size.height * 0.02,
  },
  text: {
    color: Colors.light.gray500,
    fontWeight: "700",
    marginBottom: 6,
  },
});
export default OverViewCart;
