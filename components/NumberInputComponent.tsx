"use client";
import { useState } from "react";
import { NumberInput } from "keep-react";

export const NumberInputComponent = () => {
  const [value, setValue] = useState(1000);
  return (
    <>
      <NumberInput sizing="sm" value={value} setValue={setValue} />
      <NumberInput sizing="md" value={value} setValue={setValue} />
      <NumberInput sizing="lg" value={value} setValue={setValue} />
    </>
  );
};
