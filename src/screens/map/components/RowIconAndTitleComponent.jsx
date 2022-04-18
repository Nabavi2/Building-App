import React from "react";
import { TouchableOpacity, StyleSheet, Text, SafeAreaView } from "react-native";
import { Row, Box } from "native-base";

import Colors from "../../../constants/Colors";

function RowIconAndTitleComponent({ title, onPress, marginTop }) {
  return (
    <Row style={[styles.row, { marginTop: marginTop }]}>
      <Box _text={{ fontWeight: "bold", color: Colors.light.gray500 }}>
        {title}
      </Box>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Box
          _text={{
            fontSize: 14,
            fontWeight: "bold",
            color: Colors.light.white,
          }}
        >
          +
        </Box>
      </TouchableOpacity>
    </Row>
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
