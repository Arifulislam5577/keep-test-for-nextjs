"use client";
import { Slider } from "keep-react";

export const SliderComponent = () => {
  return (
    <Slider
      step={100}
      min={100}
      max={1000}
      tooltip="bottom"
      defaultValue={300}
      onChange={(value) => console.log(value)}
    />
  );
};
