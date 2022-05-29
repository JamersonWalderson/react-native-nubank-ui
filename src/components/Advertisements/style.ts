import { theme } from "../../global/styles";
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 25%;
  margin-top: 6%;
  margin-left: 15px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  background-color: ${theme.colors.light};
  justify-content: flex-start;
  padding: 5% 0% 5% 10%;
  border-radius: 15px;
`

export const Message = styled.Text`
    padding-left: 5%;
`