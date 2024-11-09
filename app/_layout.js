import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { useColorScheme } from "@/hooks/useColorScheme";
import store, { persistor } from "../Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Text } from "react-native";
import {
  HOME_SCREEN,
  HOME_SCREEN_TITLE,
  LAUNCH_DETAILS_SCREEN,
  LAUNCH_DETAILS_SCREEN_TITLE,
} from "../Constants/ScreensConstant";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate
        loading={<Text>Loading persisted state...</Text>}
        persistor={persistor}
      >
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen
              name={HOME_SCREEN}
              options={{ headerShown: true, title: HOME_SCREEN_TITLE }}
            />
            <Stack.Screen
              name={LAUNCH_DETAILS_SCREEN}
              options={{
                headerShown: true,
                title: LAUNCH_DETAILS_SCREEN_TITLE,
              }}
            />
          </Stack>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
