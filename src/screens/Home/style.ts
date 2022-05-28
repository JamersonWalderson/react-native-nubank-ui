import { theme } from "../../global/styles";
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
`
export const Header = styled.View`
    flex: 1;
    background: ${theme.colors.primary};
    margin-bottom: 6%;
`

export const Main = styled.View`
    flex: 5;
    margin-left: 6%;
    margin-right: 6%;
`
export const Avatar = styled.View`

`
export const HeaderOptions = styled.View`
    padding: 3% 6%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Options = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding: 1%;
`
export const WelcomeMessage = styled.View`
  margin: 0% 6% 10%;
  /* background-color: aqua; */
`
export const Message = styled.Text`
  color: #fff;
  font-size: ${theme.size.subTitle};
  
`

// Main
export const SectionAccount = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
`
export const Balance = styled.View`
  font-weight: bold;
  width: 50%;
`
export const Title = styled.Text`
  font-size: ${theme.size.title};
`

export const Opened = styled.Text`
  font-weight: bold;
  font-size: ${theme.size.money};
`

export const ActionButton = styled.View`
  width: 50%;
  align-items: flex-end;
  justify-content: flex-start;
`

export const Account = styled.View`
  flex-direction: row;
  background-color: currentColor;
`
export const AccountOptionsMenu = styled.ScrollView`
  /* background-color: royalblue; */
  margin-top: 5%;

`

export const MyCards = styled.View`
  

`

export const Card = styled.TouchableOpacity`
  background-color: ${theme.colors.light};
`

export const CardMessage = styled.Text`

`