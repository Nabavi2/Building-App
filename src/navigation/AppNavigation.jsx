import React from "react";
import { View } from "react-native";
import { Entypo, Ionicons } from "expo-vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppDrawerNavigator from "./DrawerNavigator";
import Dashboard from "../screens/Dashboard";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import BuildingScreen from "../screens/BuildingScreen";

const height = Layout.window.height;
const Stack = createNativeStackNavigator();
const navigation = useNavigation();

const AppNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginScreen">
        <Stack.Screen
          name="homeScreen"
          component={AppDrawerNavigator}
          options={{
            title: "Home",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{
            title: "Global overview",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerTitleStyle: {
              fontSize: 16,
              fontWeight: "bold",
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
                  borderRadius: 2,
                  padding: 2,
                }}
              >
                <Entypo name="menu" size={30} color="black" />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="loginScreen"
          component={LoginScreen}
          options={{
            title: "Global overview",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
