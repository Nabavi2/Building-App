// import React from "react";
// import { View, Text, Column, VStack } from "react-native";
// import { Entypo } from "@expo/vector-icons";

// import Colors from "../../../constants/Colors";

// function Desplayed(props) {
//   return (
//     <Card style={styles.card}>
//       <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
//         <Row
//           style={{
//             flexDirection: "row",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Box>
//             <Ionicons name="reload" size={24} color={Colors.light.white} />{" "}
//           </Box>
//           <Column>
//             <Box
//               _text={{
//                 fontSize: 20,
//                 fontWeight: "medium",
//                 color: Colors.white,
//                 ml: 10,
//               }}
//             >
//               KFC
//             </Box>
//             <Box
//               _text={{
//                 fontSize: 12,
//                 fontWeight: "medium",
//                 color: Colors.light0,
//                 ml: 10,
//               }}
//             >
//               jun 26
//             </Box>
//           </Column>
//         </Row>
//         <Column>
//           <Entypo
//             name="dots-three-vertical"
//             size={24}
//             color={Colors.light.black}
//           />
//           <Box
//             _text={{
//               fontSize: 12,
//               fontWeight: "medium",
//               color: Colors.light0,
//               ml: 10,
//             }}
//           >
//             jun 26
//           </Box>
//         </Column>
//       </Row>
//     </Card>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     alignSelf: "center",
//     width: Dimensions.get("window").width * 0.89,
//     height: Dimensions.get("window").height * 0.12,
//     margin: 10,
//     backgroundColor: Colors.light.white,
//     borderRadius: 20,
//   },
// });
// export default Desplayed;

import React from "react";
import { StyleSheet, Dimensions, Image } from "react-native";
import { View, Text, Column, Card, Row, Box } from "native-base";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

const size = Layout.window;

function Soon(props) {
  return (
    <Row style={styles.card}>
      <Row
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          width: size.width * 0.91,
        }}
      >
        {/* <Image
          source={require("../../../../assets/2.png")}
          style={{ width: 26, height: 26, borderRadius: 13, marginLeft: 10 }}
        /> */}
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
    width: Dimensions.get("window").width * 0.93,
    height: Dimensions.get("window").height * 0.09,
    margin: 10,
    backgroundColor: Colors.light.white,
    borderRadius: 10,
  },
});
export default Soon;
