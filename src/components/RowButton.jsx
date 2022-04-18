import React from "react";
import { StyleSheet } from "react-native";
import { Row } from "native-base";
import CustomButton from "./CustomButton";
import Colors from "../constants/Colors";

function RowButton({ title1, title2, title3, bgColor = Colors.light.gray800 }) {
  return (
    <Row style={styles.buttonContainer}>
      <CustomButton
        title={title1}
        color={bgColor}
        Size={size.width * 0.28}
        onPress={() => {
          setData(initData.filter((item) => item.titel === "overview"));
        }}
      />
      <CustomButton
        title={title2}
        color={bgColor}
        Size={size.width * 0.28}
        onPress={() => {
          setData(initData.filter((item) => item.title === "status"));
        }}
      />
      <CustomButton
        title={title3}
        Size={size.width * 0.28}
        onPress={() => {
          setData(initData.filter((item) => item.title === "status"));
        }}
        color={bgColor}
      />
    </Row>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "space-between",
    width: size.width * 0.97,
    alignContent: "center",
    backgroundColor: Colors.light.gray800,
    height: 60,
    width: size.width * 0.95,
    paddingHorizontal: 10,
    alignSelf: "center",
    borderRadius: 10,
  },
});
export default RowButton;
