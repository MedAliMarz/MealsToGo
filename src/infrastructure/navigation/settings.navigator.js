import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";
const Stack = createStackNavigator();
export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <Stack.Screen name="Favourite" component={FavouritesScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
};
