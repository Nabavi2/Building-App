import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BuildingInspection from "../screens/BuildingInspection/index.js";
import BuildingOverViewScreen from "../screens/buildingoverview/index.js";
import GlobalOverview from "../screens/GlobalOverview.jsx";

const Stack = createNativeStackNavigator();

function DashboardNavigation(props) {
  return (
    <Stack.Navigator initialRouteName="globalOverview">
      <Stack.Screen name="globalOverview" component={GlobalOverview} />
      <Stack.Screen
        name="buildingOverview"
        component={BuildingOverViewScreen}
      />
      <Stack.Screen name="buildingInspection" component={BuildingInspection} />
    </Stack.Navigator>
  );
}

export default DashboardNavigation;
