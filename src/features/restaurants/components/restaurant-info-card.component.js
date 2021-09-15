import React from "react";
import { Text } from "../../../components/typography/text.component";
import { Card } from "react-native-paper";

import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  Address,
  Icon,
  Info,
  Rating,
  Section,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb",
    ],
    address = "100 random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  return (
    <Card elevation={5} style={{ marginBottom: 15 }}>
      <Card.Content>
        <Card.Cover key={name} source={{ uri: photos[0] }} />
      </Card.Content>
      <Info>
        <Text variant="label"> {name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          {isClosedTemporarily && (
            <Text variant="error">CLOSED TEMPORARILY</Text>
          )}
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          <Icon source={{ uri: icon }} />
        </Section>
        <Address> {address} </Address>
      </Info>
    </Card>
  );
};
