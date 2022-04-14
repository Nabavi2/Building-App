import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { View, Text, Column, Card, Row, Box } from "native-base";
import { Entypo } from "expo-vector-icons";

import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

const size = Layout.window;

function Desplayed(props) {
  return (
    <Row style={styles.card}>
      <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
        <Entypo
          name="circle-with-cross"
          size={34}
          color={Colors.light.red}
          style={{ marginLeft: 5 }}
        />
        <Column style={{ marginRight: size.width * 0.15 }}>
          <Box
            _text={{
              fontSize: 14,
              fontWeight: "medium",
              color: Colors.white,
              ml: 2,
              mb: 3,
            }}
          >
            asldfalsdjfl 19,23
          </Box>
          <Box
            _text={{
              fontSize: 12,
              fontWeight: "medium",
              color: Colors.light0,
              ml: 2,
            }}
          >
            jun 26
          </Box>
        </Column>

        <Column
          style={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color={Colors.light.black}
            style={{ marginLeft: size.width * 0.23, marginBottom: 10 }}
          />
          <Box
            _text={{
              fontSize: 12,
              fontWeight: "medium",
              color: Colors.light0,
              ml: size.width * 0.21,
              mt: 1,
            }}
          >
            jun 26
          </Box>
        </Column>
      </Row>
    </Row>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.89,
    height: Dimensions.get("window").height * 0.09,
    margin: 10,
    backgroundColor: Colors.light.white,
    borderRadius: 10,
  },
});
export default Desplayed;
