import React, { useState, useEffect, createContext } from "react";
import { locationRequest, locationTransform } from "./location.service";
export const LocationContext = createContext();
export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchTerm) => {
    setIsLoading(true);
    setKeyword(searchTerm);
    if (!searchTerm.length) {
      return;
    }
    locationRequest(searchTerm.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setLocation(result);
        console.log(searchTerm, result);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  return (
    <LocationContext.Provider
      value={{ location, isLoading, error, keyword, search: onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};
