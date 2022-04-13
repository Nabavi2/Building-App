import React from "react";
import { Avatar, Box, Column, FlatList, Row, Text } from "native-base";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressChart } from "react-native-chart-kit";

import CustomButton from "../components/CustomButton";
import TabSection from "../components/TabSection";
import Colors from "../constants/Colors";
import GlobalStyles from "../constants/GlobalStyles";
import Layout from "../constants/Layout";
import DashboardListItem from "../components/DashboardListItem";

const size = Layout.window;

const Dashboard = (props) => {
  const Bage = ({ text, color }) => (
    <Row alignItems={"center"}>
      <Avatar bg={color} width={15} height={15} />
      <Text ml={2} color={Colors.light.subText}>
        {text}
      </Text>
    </Row>
  );
  const data = [0.4, 0.6, 0.8];
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <TabSection />
      <Row style={styles.graphSection}>
        <Column style={styles.bagesContainer}>
          <Column mb={7}>
            <Bage color={Colors.light.red} text="Overdued" />
            <Bage color={Colors.light.orange} text="Comming soon" />
            <Bage color={Colors.light.primary} text="On time" />
            <Bage color="#707070" text="Not inspected" />
          </Column>

          <CustomButton title="Building list" />
        </Column>
        <ProgressChart
          data={data}
          width={"45%"}
          height={"100%"}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
        />
      </Row>
      <Row w={"100%"} pl={5}>
        <Text fontSize={17} fontWeight="bold" color={Colors.light.text}>
          Verkehrssicherung
        </Text>
      </Row>
      <Row w={"100%"} justifyContent={"space-evenly"} mt={5} mb={2.5}>
        <Text fontSize={14} fontWeight="bold" color={Colors.light.primary}>
          Recently checked
        </Text>
        <Text fontSize={14} fontWeight="bold" color={Colors.light.subText}>
          Comming soon
        </Text>
        <Text fontSize={14} fontWeight="bold" color={Colors.light.subText}>
          Overdued
        </Text>
      </Row>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={[
          {
            id: 1,
            name: "building Name",
            type: "building",
            date: "20.16.2021",
            address: "Stuttgart",
          },
          {
            id: 2,
            name: "Apartment Name",
            type: "Apartment",
            date: "17.32.2021",
            address: "Logsmaburge",
          },
          {
            id: 3,
            name: "building Name",
            type: "building",
            date: "20.16.2021",
            address: "Stuttgart",
          },
          {
            id: 4,
            name: "Apartment Name",
            type: "Apartment",
            date: "17.32.2021",
            address: "Logsmaburge",
          },
          {
            id: 5,
            name: "building Name",
            type: "building",
            date: "20.16.2021",
            address: "Stuttgart",
          },
          {
            id: 6,
            name: "Apartment Name",
            type: "Apartment",
            date: "17.32.2021",
            address: "Logsmaburge",
          },
          {
            id: 7,
            name: "building Name",
            type: "building",
            date: "20.16.2021",
            address: "Stuttgart",
          },
          {
            id: 8,
            name: "Apartment Name",
            type: "Apartment",
            date: "17.32.2021",
            address: "Logsmaburge",
          },
        ]}
        renderItem={({ item }) => (
          <DashboardListItem
            name={item.name}
            type={item.type}
            date={item.date}
            address={item.address}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  graphSection: {
    width: size.width,
    height: size.height * 0.28,
    padding: 25,
    marginVertical: 20,
  },
  bagesContainer: {
    width: "45%",
    height: "100%",
    justifyContent: "center",
  },
  buildingButton: {
    backgroundColor: Colors.light.primary,
    width: size.height,
  },
});

export default Dashboard;
