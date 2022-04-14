import { NativeBaseProvider } from "native-base";
import AppNavigation from "./src/navigation/AppNavigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppNavigation />
    </NativeBaseProvider>
  );
}
