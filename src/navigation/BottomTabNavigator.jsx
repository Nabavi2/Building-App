import React from "react";
import { Pressable } from "react-native";
import { Box, Row } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  Foundation,
  FontAwesome5,
  Ionicons,
  Entypo,
  Octicons,
} from "@expo/vector-icons";

import Colors from "../constants/Colors";
import BuildingInspection from "../screens/BuildingInspection";
import BuildingOverViewScreen from "../screens/buildingoverview";
import ApartmentScreen from "../screens/Apartment";
import MapScreen from "../screens/map";
import DashboardNavigation from "./DashboardNavigation";
import TrafficSafety from "../screens/TrafficSafety";
import IconContainer from "../components/IconContainer";

const bottomTabNavigator = createBottomTabNavigator();

export function BottomTabNavigator() {
  const navigation = useNavigation();
  return (
    <bottomTabNavigator.Navigator
      initialRouteName="dashboard"
      screenOptions={{
        tabBarActiveTintColor: Colors.light.primary,
        tabBarInactiveTintColor: "#afb2b5",
        tabBarStyle: {
          backgroundColor: Colors.light.gray800,
          overflow: "hidden",
        },
        tabBarShowLabel: false,
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.light.background,
          height: 90,
        },
        headerTitleStyle: {
          fontSize: 16,
          color: Colors.light.text,
        },
      }}
    >
      <bottomTabNavigator.Screen
        name="dashboard"
        component={DashboardNavigation}
        options={() => ({
          title: "Global overview",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"building"} size={23} color={color} />
          ),
          headerShown: false,
        })}
      />
      <bottomTabNavigator.Screen
        name="apartment"
        component={ApartmentScreen}
        options={() => ({
          title: "Apartments",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={31}
              color={color}
              style={{ marginLeft: 5 }}
            />
          ),
          headerRight: () => (
            <Box mr={5}>
              <IconContainer onPress={() => console.log("dkfsfdj")}>
                <Entypo
                  name="dots-three-vertical"
                  size={24}
                  color={Colors.light.gray900}
                />
              </IconContainer>
            </Box>
          ),
          headerLeft: () => (
            <Box ml={5}>
              <IconContainer
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              >
                <Ionicons name="menu" size={24} color={Colors.light.gray900} />
              </IconContainer>
            </Box>
          ),
        })}
      />
      <bottomTabNavigator.Screen
        name="trafficSafety"
        component={TrafficSafety}
        options={() => ({
          title: "Verkehrssicherung",
          tabBarIcon: ({ color }) => (
            <Foundation
              name="page-edit"
              size={24}
              color={color}
              style={{ marginLeft: 5 }}
            />
          ),

          headerStyle: {
            backgroundColor: Colors.light.blue400,
          },
          headerTitleStyle: {
            color: "white",
          },
        })}
      />
      <bottomTabNavigator.Screen
        name="mapScreen"
        component={MapScreen}
        options={() => ({
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="map-marked"
              size={24}
              color={color}
              style={{ marginLeft: 5 }}
            />
          ),
          headerShown: false,
        })}
      />
      <bottomTabNavigator.Screen
        name="homeScreen"
        component={ApartmentScreen}
        options={() => ({
          title: "Apartment",
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="settings"
              size={24}
              color={focused ? Colors.light.primary : Colors.light.white}
              style={{ marginLeft: 5 }}
            />
          ),
        })}
      />
    </bottomTabNavigator.Navigator>
  );
}
