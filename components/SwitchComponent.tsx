"use client";
import { Toggle } from "keep-react";

export const SwitchComponent = () => {
  return (
    <div>
      <Toggle bgColor="primary" label="Toggle" size="md" withIcon={true} />
      <Toggle bgColor="primary" label="Primary" size="md" />
      <Toggle bgColor="slate" label="Slate" size="lg" />
    </div>
  );
};
