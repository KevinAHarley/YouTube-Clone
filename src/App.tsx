import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@rneui/themed";
import theme from "./config/theme";
import RootStack from "./navigation/RootStack/RootStack";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <RootStack />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
