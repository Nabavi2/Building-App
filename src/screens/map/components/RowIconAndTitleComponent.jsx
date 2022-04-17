import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Row, Box } from "native-base";

import Colors from "../../../constants/Colors";

function RowIconAndTitleComponent({ title, onPress }) {
  return (
    <Row style={styles.row}>
      <Box>{title}</Box>
      <TouchableOpacity style={style.button} onPress={onPress}>
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
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: Colors.light.white,
    marginRight: 20,
    marginLeft: 20,
    alignSelf: "center",
  },
  button: {
    width: 40,
    height: 30,
    backgroundColor: Colors.light.gray500,
  },
});
export default RowIconAndTitleComponent;
