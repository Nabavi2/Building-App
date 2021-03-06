import React, { useState } from "react";
import { Avatar, Box, Column, FlatList, Row, Text, ZStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../../components/CustomButton";
import DashboardListItem from "./components/DashboardListItem";
import { PieChart } from "react-native-chart-kit";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import GlobalStyles from "../../constants/GlobalStyles";
import { StyleSheet } from "react-native";
import TabItem from "./components/TabItem";
import Bage from "./components/Bage";
import { useNavigation } from "@react-navigation/native";

const size = Layout.window;

const GlobalOverview = (props) => {
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState(true);

  const chartData = [
    {
      name: "Seoul",
      population: 14,
      color: Colors.light.red,
      legendFontColor: Colors.light.red,
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 15,
      color: Colors.light.orange,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 20,
      color: Colors.light.primary,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "New York",
      population: 45,
      color: "#707070",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const chartConfig = {
    backgroundColor: Colors.light.background,

    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Row style={styles.tabSection}>
        <TabItem
          title="Buildings"
          isSelected={isSelected}
          onPress={() => setIsSelected(true)}
        />
        <TabItem
          title="Apartments"
          isSelected={!isSelected}
          onPress={() => setIsSelected(false)}
        />
      </Row>
      <Row width={size.width} h={size.height * 0.28} p={25} my={3} bg="blue">
        <Column w="45%" h="100%" justifyContent="center">
          <Column mb={7}>
            <Bage color={Colors.light.red} text="Overdued" />
            <Bage color={Colors.light.orange} text="Comming soon" />
            <Bage color={Colors.light.primary} text="On time" />
            <Bage color="#707070" text="Not inspected" />
          </Column>

          <CustomButton
            title="Building list"
            onPress={() => navigation.navigate("buildingOverview")}
          />
        </Column>
        <ZStack alignItems={"center"} justifyContent={"center"}>
          <PieChart
            data={chartData}
            width={size.width * 0.5}
            height={size.height * 0.3}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[0, 0]}
            absolute
            hasLegend={false}
            paddingLeft={(size.width * 0.123).toString()}
          />
          <Box
            w={145}
            h={145}
            borderRadius={"full"}
            bg={Colors.light.background}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize={24} color={Colors.light.text}>
              298
            </Text>
            <Text fontSize={12} color={Colors.light.subText}>
              Total Buildings
            </Text>
          </Box>
        </ZStack>
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
        showsVerticalScrollIndicator={false}
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
  tabSection: {
    marginTop: -5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: size.width * 0.92,
    height: size.height * 0.05,
    backgroundColor: Colors.light.white,
    borderRadius: (size.height * 0.05) / 6,
  },
});

export default GlobalOverview;
