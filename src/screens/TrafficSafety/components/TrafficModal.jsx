import React, { useState } from "react";
import {
  Pressable,
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import { Box, Column, Row } from "native-base";

import CustomModal from "../../../components/CustomModal";
import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";
import FilterButton from "../../../components/FilterButton";
import RowButton from "./RowButton";
import ExamDateCart from "./ExamDateCart";
import OverViewCart from "./OverViewCart";

const size = Layout.window;

function TrafficModal({ visible2 = false }) {
  const [visible, setVisible] = useState(visible2);

  return (
    <View style={{ backgroundColor: Colors.light.background, flex: 1 }}>
      <Row style={styles.rowContainer}>
        <Image
          source={require("../../../../assets/buildingIcon.png")}
          w={10}
          h={10}
          resizeMode="contain"
          ml={10}
        />
        <Column style={{ marginLeft: -40 }}>
          <Text style={{ color: Colors.light.gray900, fontWeight: "600" }}>
            Am Schawrzenberg 19, 21, 23
          </Text>
          <Text style={{ color: Colors.light.gray500, fontSize: 12 }}>
            Am Schawrzenberg 19, 21, 23 - Würzburg
          </Text>
        </Column>
        <Box style={styles.iconBox}>
          <Entypo name="eye" size={24} color={Colors.light.white} />
        </Box>
      </Row>

      <RowButton />
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Text style={styles.text}>Prüfungsdaten</Text>
        <ExamDateCart />
        <Text style={[styles.text, { marginBottom: 3, marginTop: 30 }]}>
          Prüfungsdaten
        </Text>
        <OverViewCart />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  rowContainer: {
    margin: 15,
    width: size.width * 0.93,
    backgroundColor: Colors.light.background,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: Colors.light.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginLeft: 22,
    marginTop: 20,
    marginBottom: 9,
    fontWeight: "700",
    color: Colors.light.gray900,
  },
});
export default TrafficModal;
