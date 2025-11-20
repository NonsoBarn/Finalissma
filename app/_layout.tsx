import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // Load all Satoshi font variants
  const [fontsLoaded, fontError] = useFonts({
    // @/assets/fonts/A Satoshi-Black.otf
    "Satoshi-Black": require("@/assets/fonts/Satoshi-Black.otf"),
    "Satoshi-BlackItalic": require("@/assets/fonts/Satoshi-BlackItalic.otf"),
    "Satoshi-Bold": require("@/assets/fonts/Satoshi-Bold.otf"),
    "Satoshi-BoldItalic": require("@/assets/fonts/Satoshi-BoldItalic.otf"),
    "Satoshi-Italic": require("@/assets/fonts/Satoshi-Italic.otf"),
    "Satoshi-Light": require("@/assets/fonts/Satoshi-Light.otf"),
    "Satoshi-LightItalic": require("@/assets/fonts/Satoshi-LightItalic.otf"),
    "Satoshi-Medium": require("@/assets/fonts/Satoshi-Medium.otf"),
    "Satoshi-MediumItalic": require("@/assets/fonts/Satoshi-MediumItalic.otf"),
    "Satoshi-Regular": require("@/assets/fonts/Satoshi-Regular.otf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Don't render until the fonts have loaded
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
