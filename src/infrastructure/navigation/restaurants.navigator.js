import React from "react";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

import { createStackNavigator } from "@react-navigation/stack";

export const RestaurantsStack = createStackNavigator();
export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator headerMode="none">
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
