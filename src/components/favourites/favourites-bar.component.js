import React from "react";
import styled from "styled-components";
import { ScrollView, View } from "react-native";
import { Text } from "../typography/text.component";
import { TouchableOpacity } from "react-native";
const FavouritesWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Text>Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name.split(" ").join("");
          return (
            <View key={key} style={{ marginRight: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  });
                }}
              >
                <Text>{restaurant.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
