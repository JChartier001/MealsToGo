import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const ViewArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight + 30}px`};
  color: ${(props) => props.theme.colors.bg.primary};
`;
