import React from "react";
import { Entypo, Ionicons } from "expo-vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppDrawerNavigator from "./DrawerNavigator";
import BuildingInspection from "../screens/BuildingInspection";
import Dashboard from "../screens/Dashboard";
import LoginScreen from "../screens/Login";
import IconContainer from "../components/IconContainer";
import BuildingOverViewScreen from "../screens/buildingoverview";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import HomeScreen from "../screens/HomeScreen";

const height = Layout.window.height;
const Stack = createNativeStackNavigator();

const AppNavigation = (props) => {
  const navigation = useNavigation();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginScreen">
        <Stack.Screen
          name="dashboard"
          component={AppDrawerNavigator}
          options={{
            title: "Home",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{
            title: "Global overview",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerTitleStyle: {
              fontSize: 16,
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
            // headerLeft: () => {
            //   return (
            //     <IconContainer
            //       onPress={() => {
            //         console.log("pressed");
            //         navigation.navigate("dashboard");
            //       }}
            //     >
            //       <Ionicons name="md-arrow-back" size={27} color="black" />
            //     </IconContainer>
            //   );
            // },
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
        <Stack.Screen
          name="buildingoverview"
          component={BuildingOverViewScreen}
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
