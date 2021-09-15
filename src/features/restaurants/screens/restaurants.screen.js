import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

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

export const RestaurantsScreen = () => (
  <SafeArea>
    <ViewWithPadding>
      <Searchbar placeholder="Search" />
    </ViewWithPadding>
    <ViewWithPadding>
      <RestaurantInfoCard />
    </ViewWithPadding>
  </SafeArea>
);
