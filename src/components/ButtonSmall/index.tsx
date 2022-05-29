import React from "react";
import { Label, Wrapper } from "./style";

interface IButtonSmall {
  onPress?: any;
  label: string;
}

export const ButtonSmall = ({ onPress, label }: IButtonSmall) => {
  return(
    <Wrapper onPress={onPress}>
      <Label>{ label }</Label>
    </Wrapper>
  );
}