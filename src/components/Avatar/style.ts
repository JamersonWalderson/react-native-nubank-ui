import { theme } from "../../global/styles";
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color: ${theme.colors.secondary};
    width: 16%;
    height: 88%;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
`;