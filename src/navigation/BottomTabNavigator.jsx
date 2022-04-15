import React from "react";
import { Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "expo-vector-icons";

import Colors from "../constants/Colors";
import BuildingInspection from "../screens/BuildingInspection";
import Dashboard from "../screens/Dashboard";
import BuildingOverViewScreen from "../screens/buildingoverview";
import HomeScreen from "../screens/HomeScreen";
const bottomTabNavigator = createBottomTabNavigator();

export function BottomTabNavigator() {
  const navigation = useNavigation();
  return (
    <bottomTabNavigator.Navigator
      initialRouteName="dashboard"
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
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "home" : "ios-home"}
              color={color}
              size={24}
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("dashboard")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            ></Pressable>
          ),
          headerShown: false,
        })}
      />
      <bottomTabNavigator.Screen
        name="buildingoverview"
        component={BuildingOverViewScreen}
        options={() => ({
          title: "building",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name={
                Platform.OS === "android" ? "video-library" : "video-library"
              }
              color={color}
              size={24}
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
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "search" : "ios-search"}
              size={24}
              color={color}
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
        name="homeScreen"
        component={HomeScreen}
        options={() => ({
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "download" : "ios-download"}
              color={color}
              size={24}
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("homeScreen")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            ></Pressable>
          ),
          headerShown: false,
        })}
      />
    </bottomTabNavigator.Navigator>
  );
}
