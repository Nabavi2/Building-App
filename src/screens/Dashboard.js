import { Ionicons } from "expo-vector-icons";
import { Avatar, Button, Column, Row, Spinner, Text, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import TabSection from "../components/TabSection";
import Colors from "../constants/Colors";
import GlobalStyles from "../constants/GlobalStyles";
import Layout from "../constants/Layout";

const size = Layout.window;

const Dashboard = (props) => {
  const Bage = ({ text, color }) => (
    <Row alignItems={"center"}>
      <Avatar bg={color} width={15} height={15} />
      <Text ml={2}>{text}</Text>
    </Row>
  );
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <TabSection />
      <Row style={styles.graphSection}>
        <Column style={styles.bagesContainer}>
          <Bage color={Colors.light.red} text="Overdued" />
          <Bage color={Colors.light.orange} text="Comming soon" />
          <Bage color={Colors.light.primary} text="On time" />
          <Bage color="#707070" text="Not inspected" />
          <CustomButton title="Building list" />
        </Column>
      </Row>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  graphSection: {
    width: size.width,
    height: size.height * 0.28,
    padding: 10,
    backgroundColor: "red",
    marginVertical: 20,
  },
  bagesContainer: {
    width: "45%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "white",
  },
  buildingButton: {
    backgroundColor: Colors.light.primary,
    width: size.height,
  },
});

export default Dashboard;
