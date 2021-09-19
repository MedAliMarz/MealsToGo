import { Platform, StatusBar } from "react-native";
import styled from "styled-components";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

export const ViewWithPadding = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
