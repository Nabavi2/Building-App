import React from "react";
import { Pressable } from "react-native";
import { Row } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  Foundation,
  FontAwesome5,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";

import Colors from "../constants/Colors";
import BuildingInspection from "../screens/BuildingInspection";
import BuildingOverViewScreen from "../screens/buildingoverview";
import ApartmentScreen from "../screens/Apartment";
import MapScreen from "../screens/map";
import IconContainer from "../components/IconContainer";
import { Box } from "native-base";
import GlobalOverview from "../screens/GlobalOverview.jsx";

const bottomTabNavigator = createBottomTabNavigator();

export function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
    <bottomTabNavigator.Navigator
      initialRouteName="dashboard"
      screenOptions={{
        tabBarActiveTintColor: Colors.light.primary,
        tabBarInactiveTintColor: "white",
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
        component={GlobalOverview}
        options={() => ({
          title: "Global overview",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"building"} size={23} color={color} />
          ),
        })}
      />
      <bottomTabNavigator.Screen
        name="apartment"
        component={BuildingOverViewScreen}
        options={() => ({
          title: "Gebäudeübersicht",
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
        name="buildingInspection"
        component={BuildingInspection}
        options={() => ({
          title: "Gebäudeprüfung",
          tabBarIcon: ({ color }) => (
            <Foundation
              name="page-edit"
              size={24}
              color={color}
              style={{ marginLeft: 5 }}
            />
          ),

          headerStyle: {
            backgroundColor: Colors.light.primary,
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
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="google-maps"
              size={24}
              color={color}
            />
          ),
        })}
      />
    </bottomTabNavigator.Navigator>
  );
}
