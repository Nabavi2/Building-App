import { NativeBaseProvider } from "native-base";
import { MenuProvider } from "react-native-popup-menu";
import AppNavigation from "./src/navigation/AppNavigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <MenuProvider>
        <AppNavigation />
      </MenuProvider>
    </NativeBaseProvider>
  );
}
