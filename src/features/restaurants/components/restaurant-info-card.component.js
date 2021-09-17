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
  console.log(restaurant);
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  return (
    <Card key={name} elevation={5} style={{ marginBottom: 15 }}>
      <Card.Content>
        <Card.Cover source={{ uri: photos[0] }} />
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
