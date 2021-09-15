import React from "react";
import styled from "styled-components/native";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://static3.depositphotos.com/1003631/209/i/600/depositphotos_2099183-stock-photo-fine-table-setting-in-gourmet.jpg",
    ],
    address = "100 random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <Card elevation={5}>
      <Card.Content>
        <Card.Cover key={name} source={{ url: photos[0] }} />
        <Title> {name}</Title>
      </Card.Content>
    </Card>
  );
};
