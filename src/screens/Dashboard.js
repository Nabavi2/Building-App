import { Ionicons } from "expo-vector-icons";
import { Spinner } from "native-base";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TabSection from "../components/TabSection";
import Colors from "../constants/Colors";
import GlobalStyles from "../constants/GlobalStyles";
import Layout from "../constants/Layout";

const size = Layout.window;

const Dashboard = (props) => {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <TabSection />
      <View style={styles.graphSection}>
        <View style={styles.bagesContainer}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  graphSection: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    width: size.width,
    height: size.height * 0.28,
    padding: 10,
    backgroundColor: "red",
    marginVertical: 20,
  },
  bagesContainer: {
    width: "45%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
});

export default Dashboard;
