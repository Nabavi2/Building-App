import React from "react";
import { Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  Foundation,
  FontAwesome5,
} from "expo-vector-icons";

import Colors from "../constants/Colors";
import BuildingInspection from "../screens/BuildingInspection";
import Dashboard from "../screens/Dashboard";
import BuildingOverViewScreen from "../screens/buildingoverview";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/map";


const bottomTabNavigator = createBottomTabNavigator();
const navigation = useNavigation();
export function BottomTabNavigator() {
  return (
    <bottomTabNavigator.Navigator
      initialRouteName="loginScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors.light.primary,
        tabBarStyle: {
          backgroundColor: Colors.light.background,
          overflow: "hidden",
        },
        headerShown: false,
        headerStyle: { backgroundColor: Colors.light.background },
      }}
    >
      <bottomTabNavigator.Screen
        name="dashboard"
        component={Dashboard}
        options={() => ({
          title: "Dashboard Screen",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={Platform.OS === "android" ? "building" : "building"}
              size={23}
              color={focused ? Colors.light.primary : Colors.light.black}
            />
          ),
          headerRight: () => {
            const navigation = useNavigation();
            return (
              <Pressable
                onPress={() => navigation.navigate("dashboard")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <FontAwesome5
                  name={Platform.OS === "android" ? "building" : "building"}
                  size={23}
                  color={focused ? Colors.light.primary : Colors.light.black}
                />
              </Pressable>
            );
          },
          headerShown: false,
        })}
      />
      <bottomTabNavigator.Screen
        name="buildingoverview"
        component={BuildingOverViewScreen}
        options={() => ({
          title: "building",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={24}
              color={focused ? Colors.light.primary : Colors.light.black}
              style={{ marginLeft: 5 }}
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("buildingoverview")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            ></Pressable>
          ),
          headerShown: false,
        })}
      />
      <bottomTabNavigator.Screen
        name="buildingInspection"
        component={BuildingInspection}
        options={() => ({
          title: "Dash ",
          tabBarIcon: ({ focused }) => (
            <Foundation
              name="page-edit"
              size={24}
              color={focused ? Colors.light.primary : Colors.light.black}
              style={{ marginLeft: 5 }}
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("buildingInspection")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            ></Pressable>
          ),
          headerShown: false,
        })}
      />
      <bottomTabNavigator.Screen
        name="mapScreen"
        component={MapScreen}
        options={() => ({
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="map-marked"
              size={24}
              color={focused ? Colors.light.primary : Colors.light.black}
              style={{ marginLeft: 5 }}
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("mapScreen")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            ></Pressable>
          ),
          headerShown: false,
        })}
      />
      <bottomTabNavigator.Screen
        name="homeScreen"
        component={HomeScreen}
        options={() => ({
          title: "Home",
          tabBarIcon: ({ focused }) => (
            // <FontAwesome5
            //   name="map-marked"
            //   size={24}
            //   color={focused ? Colors.light.white : Colors.light.black}
            //   style={{ marginLeft: 5 }}
            // />
            <MaterialCommunityIcons
              name="google-maps"
              size={24}
              color={focused ? Colors.light.white : Colors.light.black}
            />
          ),
          headerRight: () => {
            return (
              <Pressable
                onPress={() => navigation.navigate("homeScreen")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              ></Pressable>
            );
          },
          headerShown: false,
        })}
      />
    </bottomTabNavigator.Navigator>
  );
}
