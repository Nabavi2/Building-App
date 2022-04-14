import React from "react";
import { SafeAreaView } from "react-native";
import { Row, Column, Box,  } from "native-base";
import { Entypo } from "expo-vector-icons";

import Colors from "../../constants/Colors";

function BuildingOverViewScreen(props) {
  return (
    <SafeAreaView>
      <Row justifyContent="space-between" marginBottom={70}>
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
          <Entypo name="dots-three-vertical" size={24} color="#FFF" />
        </Box>
      </Row>
      

    </SafeAreaView>
  );
}

export default BuildingOverViewScreen;
