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
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetails}
      />
    </RestaurantsStack.Navigator>
  );
};
