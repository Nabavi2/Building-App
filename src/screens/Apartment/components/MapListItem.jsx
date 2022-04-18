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
import ListTileContainer from "../../../components/ListTileContainer";

function MapListItem({ type, title, subTitle, borg }) {
  const size = Layout.window;
  console.log(borg);
  return (
    <ListTileContainer>
      <Row
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          width: size.width * 0.91,
        }}
      >
        <Column style={{ marginRight: size.width * 0.2 }}>
          <Box
            _text={{
              fontSize: 12,
              fontWeight: "medium",
              color: Colors.white,
              ml: 2,
              mb: 3,
            }}
          >
            {title}
          </Box>
          <Box
            _text={{
              fontSize: 12,
              fontWeight: "medium",
              color: Colors.light0,
              ml: 2,
            }}
          >
            {subTitle}
          </Box>
        </Column>
        <Column
          style={{
            // alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            alignContent: "center",
          }}
        >
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color={Colors.light.black}
            style={{ marginLeft: size.width * 0.03, marginBottom: 10 }}
          />
          <Box
            _text={{
              fontSize: 12,
              fontWeight: "medium",
              color: Colors.light0,
              ml: -5,
              mt: 1,
              mr: 15,
            }}
          >
            {borg}
          </Box>
        </Column>
      </Row>
    </ListTileContainer>
  );
}

export default MapListItem;
