import { theme } from "../../global/styles";
import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  justify-content: center;
  padding: 3% 3%;
  border-radius: 100px;
  background-color: ${theme.colors.light};
  margin-top: 6%;
  width: 60%;
  
`;

export const Label = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: ${theme.size.subTitle};
`