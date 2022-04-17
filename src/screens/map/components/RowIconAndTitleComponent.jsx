import React from "react";
import { TouchableOpacity, StyleSheet, Text, SafeAreaView } from "react-native";
import { Row, Box } from "native-base";

import Colors from "../../../constants/Colors";

function RowIconAndTitleComponent({ title, onPress }) {
  return (
    <SafeAreaView>
      <Row style={styles.row}>
        <Text style={{ fontWeight: "bold", color: Colors.light.gray500 }}>
          {title}
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 18,
              color: Colors.light.white,
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </Row>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: Colors.light.white,
    marginRight: 28,
    marginLeft: 15,
    elevation: 1,
  },
  button: {
    width: 40,
    height: 30,
    backgroundColor: Colors.light.gray500,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    paddingBottom: 4,
  },
});
export default RowIconAndTitleComponent;
