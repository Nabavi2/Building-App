import { StyleSheet } from "react-native";

import colors from "./Colors";

const GlobalStyles = StyleSheet.create({
  defaultText: {},
  title: {},
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.light.background,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  image: {},
});

export default GlobalStyles;
