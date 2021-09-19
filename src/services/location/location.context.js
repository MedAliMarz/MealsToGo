import React, { useState, createContext, useEffect } from "react";
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
  };
  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setLocation(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ location, isLoading, error, keyword, search: onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};
