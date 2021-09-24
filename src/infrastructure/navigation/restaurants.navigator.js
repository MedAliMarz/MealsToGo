import React from "react";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetails } from "../../features/restaurants/screens/restaurant-details.screen";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

export const RestaurantsStack = createStackNavigator();
export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurantsStack.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetails}
      />
    </RestaurantsStack.Navigator>
  );
};
