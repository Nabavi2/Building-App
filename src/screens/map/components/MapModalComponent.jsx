import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { View, Text, Column, Card, Row, Box } from "native-base";
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

const size = Layout.window;

function MapModalComponent({ title, number, subTitle }) {
  return (
    <Row style={styles.card}>
      <Row
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          width: size.width * 0.91,
        }}
      >
        <Column style={{ marginLeft: 10 }}>
          <Box
            _text={{
              fontSize: 12,
              fontWeight: "medium",
              color: Colors.light.gray500,
              ml: 2,
              mb: 3,
            }}
          >
            {title}
          </Box>

          <Row>
            <FontAwesome name="tree" size={24} color={Colors.light.gray500} />
            <Box
              _text={{
                fontSize: 12,
                fontWeight: "medium",
                color: Colors.light.gray500,
                ml: 2,
              }}
            >
              {number}
            </Box>
          </Row>
        </Column>
        <Box
          _text={{ marginTop: 8, marginRight: 3, color: Colors.light.gray500 }}
        >
          {subTitle}
        </Box>
      </Row>
    </Row>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.93,
    height: Dimensions.get("window").height * 0.09,
    margin: 10,
    backgroundColor: Colors.light.white,
    borderRadius: 10,
  },
});
export default MapModalComponent;
