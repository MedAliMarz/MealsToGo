import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

export const Search = ({ isFavouriteToggled, onFavouriteToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <Searchbar
      icon={isFavouriteToggled ? "heart" : "heart-outline"}
      onIconPress={onFavouriteToggle}
      placeholder="Search for a location"
      value={keyword}
      onSubmitEditing={() => {
        search(searchKeyword);
      }}
      onChangeText={(text) => {
        setSearchKeyword(text);
      }}
    />
  );
};
