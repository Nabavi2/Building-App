import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../screens/Dashboard";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { Entypo, Ionicons } from "expo-vector-icons";
import { View } from "native-base";
import BuildingInspection from "../screens/BuildingInspection";

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
              <View
                style={{
                  width: 39,
                  height: 39,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: Colors.light.white,
                  borderRadius: 5,
                  padding: 2,
                  marginLeft: 2.5,
                }}
              >
                <Entypo name="menu" size={30} color="black" />
              </View>
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
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
