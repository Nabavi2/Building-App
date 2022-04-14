import React from "react";
import { View, Text, Column, VStack } from "react-native";
import { Entypo } from "expo-vector-icons";

import Colors from "../../../constants/Colors";

function Desplayed(props) {
  return (
    <Card style={styles.card}>
      <HStack style={{ justifyContent: "space-between", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo name="circle-with-cross" size={24} color={Colors.light.red} />
          <View style={{ flexDirection: "column" }}>
            <Box
              _text={{
                fontSize: 20,
                fontWeight: "medium",
                color: Colors.white,
                ml: 10,
              }}
            >
              KFC
            </Box>
            <Box
              _text={{
                fontSize: 12,
                fontWeight: "medium",
                color: Colors.light0,
                ml: 10,
              }}
            >
              jun 26
            </Box>
          </View>
        </View>
        <Column>
          <Entypo
            name="dots-three-vertical"
            size={24}
            color={Colors.light.black}
          />
          <Box
            _text={{
              fontSize: 12,
              fontWeight: "medium",
              color: Colors.light0,
              ml: 10,
            }}
          >
            jun 26
          </Box>
        </Column>
      </HStack>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.89,
    height: Dimensions.get("window").height * 0.12,
    margin: 10,
    backgroundColor: Colors.light.white,
    borderRadius: 20,
  },
});
export default Desplayed;
