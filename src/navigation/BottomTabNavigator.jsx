import React from "react";
import { Pressable } from "react-native";
import { Row } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  Foundation,
  FontAwesome5,
<<<<<<< HEAD
=======
  Entypo,
  Ionicons,
>>>>>>> bd9f0f683c49a742dd29da5b7f803ba42722a173
} from "@expo/vector-icons";

import Colors from "../constants/Colors";
import BuildingInspection from "../screens/BuildingInspection";
import Dashboard from "../screens/Dashboard";
import BuildingOverViewScreen from "../screens/buildingoverview";
import ApartmentScreen from "../screens/Apartment";
import MapScreen from "../screens/map";
import IconContainer from "../components/IconContainer";
import { Box } from "native-base";

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
        headerShown: true,
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
        component={Dashboard}
        options={() => ({
          title: "Global overview",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"building"} size={23} color={color} />
          ),
<<<<<<< HEAD
          // headerRight: () => {
          //   const navigation = useNavigation();
          //   return (
          //     <Pressable
          //       onPress={() => navigation.navigate("dashboard")}
          //       style={({ pressed }) => ({
          //         opacity: pressed ? 0.5 : 1,
          //       })}
          //     >
          //       <FontAwesome5
          //         name={Platform.OS === "android" ? "building" : "building"}
          //         size={23}
          //         color={focused ? Colors.light.primary : Colors.light.black}
          //       />
          //     </Pressable>
          //   );
          // },
          headerShown: false,
=======
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
>>>>>>> bd9f0f683c49a742dd29da5b7f803ba42722a173
        })}
      />
      <bottomTabNavigator.Screen
        name="apartment"
        component={ApartmentScreen}
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
<<<<<<< HEAD
          headerShown: true,
=======
>>>>>>> bd9f0f683c49a742dd29da5b7f803ba42722a173
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
<<<<<<< HEAD
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate("buildingInspection")}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}
          //   ></Pressable>
          // ),
          headerShown: true,
=======

          headerStyle: {
            backgroundColor: Colors.light.primary,
          },
          headerTitleStyle: {
            color: "white",
          },
>>>>>>> bd9f0f683c49a742dd29da5b7f803ba42722a173
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
<<<<<<< HEAD
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate("mapScreen")}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}
          //   ></Pressable>
          // ),
=======
>>>>>>> bd9f0f683c49a742dd29da5b7f803ba42722a173
          headerShown: false,
        })}
      />
      <bottomTabNavigator.Screen
        name="homeScreen"
        component={ApartmentScreen}
        options={() => ({
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="google-maps"
              size={24}
              color={color}
            />
          ),
<<<<<<< HEAD
          // headerRight: () => {
          //   return (
          //     <Pressable
          //       onPress={() => navigation.navigate("homeScreen")}
          //       style={({ pressed }) => ({
          //         opacity: pressed ? 0.5 : 1,
          //       })}
          //     ></Pressable>
          //   );
          // },
=======
>>>>>>> bd9f0f683c49a742dd29da5b7f803ba42722a173
          headerShown: false,
        })}
      />
    </bottomTabNavigator.Navigator>
  );
}
