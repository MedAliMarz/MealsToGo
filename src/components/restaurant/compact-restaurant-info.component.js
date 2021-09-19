import React from "react";
import { ViewWithPadding } from "../../features/restaurants/components/safe-area.component";
import { Text } from "../typography/text.component";
import styled from "styled-components";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";
const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <ViewWithPadding>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
    </ViewWithPadding>
  );
};
