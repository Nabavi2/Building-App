import React, { useState } from "react";
import { StyleSheet, Dimensions, Pressable } from "react-native";
import { Row, Box } from "native-base";

import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";
import { FontAwesome } from "@expo/vector-icons";

const size = Layout.window;

function CarMapComponent() {
  const [status, setStatus] = useState(false);
  return (
    <Pressable
      onPressIn={() => setStatus(!status)}
      style={[
        styles.card,
        { backgroundColor: status ? Colors.light.primary : Colors.light.white },
      ]}
    >
      <Row justifyContent="space-between" pr={4}>
        <Box
          _text={{
            fontSize: 15,
            fontWeight: "bold",
            color: status ? Colors.light.white : Colors.light.gray500,
            ml: 4,
          }}
        >
          My checklist item
        </Box>
        {status ? (
          <Box
            h={6}
            w={6}
            borderRadius={12}
            bgColor={Colors.light.white}
            justifyContent="center"
            alignItems="center"
          >
            <FontAwesome name="check" size={18} color={Colors.light.primary} />
          </Box>
        ) : null}
      </Row>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.85,
    height: Dimensions.get("window").height * 0.07,
    margin: 10,
    backgroundColor: Colors.light.white,
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 6,
    elevation: 0.5,
  },
});
export default CarMapComponent;
