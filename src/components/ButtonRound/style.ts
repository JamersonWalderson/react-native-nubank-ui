import { theme } from "../../global/styles";
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color: ${theme.colors.light};
    width: 65px;
    height: 65px;
    border-radius: 60px;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

export const Wrapper = styled.View`
    align-items: center;
`

export const Label = styled.Text`
    text-align: center;
`