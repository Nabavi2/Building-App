import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppDrawerNavigator from "./DrawerNavigator";
import LoginScreen from "../screens/Login";
import Layout from "../constants/Layout";
import MapStatusScreen from "../screens/map/MapStatusScreen";
import MapScreen from "../screens/map";

const Stack = createNativeStackNavigator();
// const navigation = useNavigation();

const AppNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="mapstatus">
        <Stack.Screen
          name="dashboard"
          component={AppDrawerNavigator}
          options={{
            title: "Dashboard",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="mapstatus"
          component={MapStatusScreen}
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
