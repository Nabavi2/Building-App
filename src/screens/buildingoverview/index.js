import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Row, Column, Box } from "native-base";
import { Entypo } from "expo-vector-icons";

import Colors from "../../constants/Colors";

function BuildingOverViewScreen(props) {
  return (
    <SafeAreaView>
      <Row justifyContent="space-between" marginBottom={20} alignItems="center">
        <Entypo
          name="menu"
          size={24}
          color="black"
          style={{ marginLeft: 10, marginTop: 20 }}
        />
        <Box
          _text={{
            fontSize: 30,
            color: Colors.white,
            marginLeft: 10,
            marginTop: 5,
            fontWeight: "bold",
          }}
        >
          Statistics
        </Box>
        <Box style={styles.iconView}>
          <Entypo
            name="dots-three-vertical"
            size={24}
            color={Colors.light.black}
            style={{ marginTop: 20 }}
          />
        </Box>
      </Row>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  iconView: {
    width: 60,
    height: 60,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default BuildingOverViewScreen;
