import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Colors from "./src/constants/Colors";
import GlobalStyles from "./src/constants/GlobalStyles";
import LoginScreen1 from "./src/screens/LoginScreen1";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
