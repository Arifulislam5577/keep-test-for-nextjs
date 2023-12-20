"use client";
import { CheckBox } from "keep-react";

export const CheckboxComponent = () => {
  const handleChecked = (value: any) => {
    console.log(value);
  };
  return (
    <>
      <CheckBox
        size="md"
        variant="square"
        label="Checkbox"
        id="two"
        name="countries"
        color="info"
        handleChecked={handleChecked}
      />
      <CheckBox
        size="md"
        variant="square"
        label="Square"
        id="square"
        name="countries"
        color="info"
        handleChecked={handleChecked}
      />
      <CheckBox
        size="md"
        variant="circle"
        label="Circle"
        id="circle"
        name="countries"
        color="info"
        handleChecked={handleChecked}
      />
    </>
  );
};
