import { theme } from "../../global/styles";
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin-top: 6%;
`;

export const Wrapper = styled.View`
  background-color: ${theme.colors.light};
  justify-content: flex-start;
  padding: 3% 3% 3% 10%;
  
  flex-direction: row;
  border-radius: 15px;
`

export const Message = styled.Text`
    padding-left: 5%;
`