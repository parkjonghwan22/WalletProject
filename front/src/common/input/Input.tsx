import React from "react";
import { InputStyled } from "./styled/input.styled";

interface input {
  placeholder: string;
  color?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
}

export const placeholderChip = {
  text1: "Client Account",
  text2: "Amount",
};

export const colorChip = {
  color1: "#e6a15c",
  color2: "#232a3f",
  color3: "#8F98B3",
};

export const widthChip = {
  width1: "220px",
  width2: "200px",
};

export const Input: React.FC<input> = ({
  placeholder,
  color,
  value,
  onChange,
  name,
  id,
}) => {
  return (
    <InputStyled
      placeholder={placeholderChip[placeholder as keyof typeof placeholderChip]}
      color={colorChip[color as keyof typeof colorChip]}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
    />
  );
};
