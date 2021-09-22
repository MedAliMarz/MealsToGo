import React, { useContext } from "react";
import { SafeArea } from "../../restaurants/components/safe-area.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantsListComponent } from "../../restaurants/screens/restaurants.screen";
import { Text } from "../../../components/typography/text.component";
export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return (
    <SafeArea>
      {favourites.length ? (
        RestaurantsListComponent(favourites, navigation)
      ) : (
        <Text>No favourites yet</Text>
      )}
    </SafeArea>
  );
};
