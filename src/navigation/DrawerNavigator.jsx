import { Image, View, Text, ScrollView } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomTabNavigator } from './BottomTabNavigator';
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";

const DrawerNavigator = createDrawerNavigator();
const AppDrawerNavigator = () => {
  const dispatch = useDispatch();
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
              <Image
                style={{
                  width: 200,
                  height: 200,
                  marginLeft: 30,
                  marginBottom: 20,
                  marginTop: 30,
                  borderRadius: 100,
                }}
                source={require("../../assets/logo.jpg")}
              />
              <DrawerItemList {...props} />
              <TouchableOpacity
                style={{
                  width: "55%",
                  height: 35,
                  flexDirection: "row",
                  backgroundColor: "transparent",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={ () => {
                  // setIsLoading(false);
                  console.log("lasdjflasjdfladjflaf")
                }}
              ></TouchableOpacity>
            </SafeAreaView>
          </View>
        );
      }}
      screenOptions={{
        drawerActiveTintColor: Colors.light.white,
        headerStyle: { backgroundColor: Colors.light.background },
        headerTintColor: Colors.light.white,
        drawerInactiveTintColor: Colors.light.gray200,
      }}
    >
      <DrawerNavigator.Screen
        name="NETFLIX"
        component={BottomTabNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "home" : "ios-home"}
              size={23}
              color={props.color}
            />
          ),
          headerTitleStyle: { color: Colors.primary },
        }}
      />
      <DrawerNavigator.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "search" : "ios-search"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />

      <DrawerNavigator.Screen
        name="ComingSoonScreen"
        component={ComingSoonScreen}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons
              name={
                Platform.OS === "android" ? "video-library" : "video-library"
              }
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </DrawerNavigator.Navigator>
  );
};

export default AppDrawerNavigator;
