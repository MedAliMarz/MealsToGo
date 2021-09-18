import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LocationContextProvider } from "./src/services/location/location.context";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Text } from "./src/components/typography/text.component";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const Settings = () => <Text>Settings</Text>;

const Maps = () => <Text>Settings</Text>;

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Settings: "md-settings",
  Maps: "md-map",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => {
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerShown: false,
  };
};
export default function App() {
  let [oswadlLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswadlLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Settings" component={Settings} />
                <Tab.Screen name="Maps" component={Maps} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
