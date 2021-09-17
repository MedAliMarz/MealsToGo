import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import {
  Platform,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

const ViewWithPadding = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <ViewWithPadding>
        <Searchbar placeholder="Search" />
      </ViewWithPadding>
      <RestaurantsList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
