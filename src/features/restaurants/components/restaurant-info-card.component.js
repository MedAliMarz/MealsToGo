import React from "react";
import { Text } from "../../../components/typography/text.component";
import { Card } from "react-native-paper";
import { Favourite } from "../../../components/favourites/favourite.component";
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
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
    placeId,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  return (
    <Card elevation={5} style={{ marginBottom: 15 }}>
      <Card.Content>
        <Favourite restaurant={restaurant} />
        <Card.Cover key={name} source={{ uri: photos[0] }} />
      </Card.Content>
      <Info>
        <Text variant="label"> {name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`star-${placeId}-${index}`}
                xml={star}
                width={20}
                height={20}
              />
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
