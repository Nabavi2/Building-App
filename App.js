import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./src/navigation/AppNavigation";

import Colors from "./src/constants/Colors";
import GlobalStyles from "./src/constants/GlobalStyles";
import LoginScreen1 from "./src/screens/LoginScreen1";

export default function App() {
  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
=======
    <NativeBaseProvider>
      <AppNavigation />
    </NativeBaseProvider>
>>>>>>> 93c0c7b5b6c56fe70b637f513487960ba13a1caf
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: Colors.light.background,
=======
    backgroundColor: "white",
>>>>>>> 93c0c7b5b6c56fe70b637f513487960ba13a1caf
    alignItems: "center",
    justifyContent: "center",
  },
});
