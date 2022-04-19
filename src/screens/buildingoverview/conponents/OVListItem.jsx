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

const size = Layout.window;

function OVListItem({ type, title, subTitle, borg }) {
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
        {type === "displayed" ? (
          <Entypo
            name="circle-with-cross"
            size={29}
            color={Colors.light.red}
            style={{ marginLeft: 10 }}
          />
        ) : type == "soon" ? (
          <Box
            style={{
              width: 26,
              height: 26,
              borderRadius: 20,
              marginLeft: 10,
              backgroundColor: Colors.light.orange,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="reload"
              size={22}
              color={Colors.light.white}
            />
          </Box>
        ) : (
          <FontAwesome
            name="check-circle"
            size={30}
            color={Colors.light.primary}
            style={{ marginLeft: 10 }}
          />
        )}

        <Column style={{ marginRight: size.width * 0.2 }}>
          <Box
            _text={{
              fontSize: 14,
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
export default OVListItem;
