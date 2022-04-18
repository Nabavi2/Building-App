import React from "react";
import { TouchableOpacity, StyleSheet, Text, SafeAreaView } from "react-native";
import { Row, Box } from "native-base";

import Colors from "../../../constants/Colors";

<<<<<<< HEAD
function RowIconAndTitleComponent({ title, onPress, marginTop }) {
  return (
    <Row style={[styles.row, { marginTop: marginTop }]}>
      <Box _text={{ fontWeight: "bold", color: Colors.light.gray500 }}>
        {title}
      </Box>

=======
function RowIconAndTitleComponent({ title, onPress }) {
  return (
    <Row style={styles.row}>
      <Box>{title}</Box>
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
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
<<<<<<< HEAD
=======
    elevation: 1,
>>>>>>> 1b5eb13217be947a6f76949604766db47633d92f
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
