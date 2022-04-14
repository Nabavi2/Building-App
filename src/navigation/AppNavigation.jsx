import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../screens/Dashboard";
import Colors from "../constants/Colors";
import { Entypo, Ionicons } from "expo-vector-icons";
import { Column, View } from "native-base";
import BuildingInspection from "../screens/BuildingInspection/inex";
import Layout from "../constants/Layout";
import IconContainer from "../components/IconContainer";

const Stack = createNativeStackNavigator();
const height = Layout.window.height;

const AppNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="buildingInspection">
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{
            title: "Global overview",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerTitleStyle: {
              fontSize: 16,
              // fontWeight: "bold",
            },
            headerStyle: {
              height: 90,
              backgroundColor: Colors.light.background,
            },
            headerLeft: () => (
              <IconContainer>
                <Entypo name="menu" size={30} color="black" />
              </IconContainer>
            ),
          }}
        />
        <Stack.Screen
          name="buildingInspection"
          component={BuildingInspection}
          options={{
            title: "Gebäudeprüfung",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerTitleStyle: {
              fontSize: 16,
              color: Colors.light.white,
            },
            headerStyle: {
              backgroundColor: Colors.light.primary,
              height: 90,
            },
            headerLeft: () => (
              <IconContainer>
                <Ionicons name="md-arrow-back" size={27} color="black" />
              </IconContainer>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
