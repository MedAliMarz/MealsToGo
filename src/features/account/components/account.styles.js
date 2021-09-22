import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";

const CustomImageBackground = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Background = ({ children }) => {
  return (
    <CustomImageBackground
      source={require("../../../../assets/home_bg.jpg")}
      resizeMode="cover"
    >
      {children}
    </CustomImageBackground>
  );
};

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  flex: 0.3;
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  justify-content: space-evenly;
`;

export const LoginContainer = styled.View`
  height: 60%;
  width: 70%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  justify-content: space-evenly;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})``;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
