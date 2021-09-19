import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "../../components/typography/text.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

const Settings = () => <Text>Settings</Text>;

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
export const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Maps" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
