import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="homeScreen"
      screenOptions={{
        tabBarActiveTintColor: "#eee",
        tabBarStyle: { backgroundColor: "black", overflow: "hidden" },
        headerShown: false,
        headerStyle: { backgroundColor: Colors.light.background },
      }}
    >
      <Tab.Screen
        name="homeScreen"
        component={TopTabNavigator}
        options={() => ({
          title: "Home Screen",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "home" : "ios-home"}
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
      <Tab.Screen
        name="buildingScreen"
        component={BuildingScreen}
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
              onPress={() => navigation.navigate("buildingScreen")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            ></Pressable>
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
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
              onPress={() => navigation.navigate("dashboard")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            ></Pressable>
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={() => ({
          title: "Dashbbb",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "download" : "ios-download"}
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
    </Tab.Navigator>
  );
}
