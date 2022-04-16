import {
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Column, Row } from "native-base";
import {
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Foundation,
  Octicons,
} from "expo-vector-icons";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { BottomTabNavigator } from "./BottomTabNavigator";

import Colors from "../constants/Colors";
import Dashboard from "../screens/Dashboard";
import BuildingOverViewScreen from "../screens/buildingoverview";
import Layout from "../constants/Layout";
import SettingsScreen from "../screens/Settings";
import EditScreen from "../screens/EditScreen";

const size = Layout.window;
const DrawerNavigator = createDrawerNavigator();
const AppDrawerNavigator = () => {
  return (
    <DrawerNavigator.Navigator
      drawerContent={(props) => {
        return (
          <View
            style={{
              flex: 1,
              paddingTop: 20,
              backgroundColor: Colors.light.background,
            }}
          >
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <Row style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    marginLeft: 30,
                    marginBottom: 20,
                    marginTop: 30,
                    borderRadius: 100,
                  }}
                  source={require("../../assets/logo.jpg")}
                />
                <Column style={{ marginLeft: 10, marginRight: 30 }}>
                  <Text
                    style={{
                      color: Colors.light.gray500,
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    Company name
                  </Text>
                  <Text style={{ color: Colors.light.gray500, FontSize: 16 }}>
                    www.company.com
                  </Text>
                </Column>
              </Row>

              <DrawerItemList {...props} />
              <Column
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <TouchableOpacity
                  style={{
                    width: size.width * 0.58,
                    height: 35,
                    flexDirection: "row",
                    backgroundColor: Colors.light.primary,
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    marginTop: size.height * 0.35,
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    console.log("lasdjflasjdfladjflaf");
                  }}
                >
                  <Text style={{ color: Colors.light.white, fontSize: 16 }}>
                    Snychronize
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: size.width * 0.58,
                    height: 35,
                    flexDirection: "row",
                    backgroundColor: Colors.light.red,
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    console.log("lasdjflasjdfladjflaf");
                  }}
                >
                  <Image
                    style={{ height: 17, width: 17 }}
                    source={require("../../assets/logout.png")}
                  />
                  <Text
                    style={{
                      color: Colors.light.white,
                      fontSize: 16,
                      marginLeft: 5,
                    }}
                  >
                    Logout
                  </Text>
                </TouchableOpacity>
                <Text style={{ color: Colors.light.gray500, fontSize: 16 }}>
                  Footer text goes here
                </Text>
              </Column>
            </SafeAreaView>
          </View>
        );
      }}
      screenOptions={{
        drawerActiveTintColor: Colors.light.white,
        drawerActiveBackgroundColor: Colors.light.primary,
        headerTintColor: Colors.light.white,
        drawerInactiveTintColor: Colors.light.black,
        drawerInactiveBackgroundColor: Colors.light.white,
        headerShown: false,
        drawerItemStyle: {
          borderRadius: 7,
          width: size.width * 0.6,
          alignSelf: "center",
        },
      }}
    >
      <DrawerNavigator.Screen
        name="Gebäude"
        component={BottomTabNavigator}
        options={{
          title: "Gebäude",
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              name={Platform.OS === "android" ? "building" : "building"}
              size={23}
              color={focused ? Colors.light.white : Colors.light.black}
            />
          ),
          headerTitleStyle: { color: Colors.light.background },
        }}
      />
      <DrawerNavigator.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          title: "Wohnungen",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={24}
              color={focused ? Colors.light.white : Colors.light.black}
              style={{ marginLeft: 5 }}
            />
          ),
          drawerContentContainerStyle: { backgroundColor: Colors.light.white },
        }}
      />

      <DrawerNavigator.Screen
        name="buildingoverview"
        component={BuildingOverViewScreen}
        options={{
          title: "Verkehrssicherung",
          drawerIcon: ({ focused }) => (
            <Foundation
              name="page-edit"
              size={24}
              color={focused ? Colors.light.white : Colors.light.black}
              style={{ marginLeft: 5 }}
            />
          ),
        }}
      />
      <DrawerNavigator.Screen
        name="editscreen"
        component={EditScreen}
        options={{
          title: "Karte",
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              name="map-marked"
              size={24}
              color={focused ? Colors.light.white : Colors.light.black}
              style={{ marginLeft: 5 }}
            />
          ),
        }}
      />
      <DrawerNavigator.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          drawerIcon: ({ focused }) => (
            <Octicons
              name="settings"
              size={24}
              color={focused ? Colors.light.white : Colors.light.black}
              style={{ marginLeft: 5 }}
            />
          ),
        }}
      />
    </DrawerNavigator.Navigator>
  );
};

export default AppDrawerNavigator;
