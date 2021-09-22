import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
const Stack = createStackNavigator();
export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="Favourite"
        component={FavouritesScreen}
      />
    </Stack.Navigator>
  );
};
