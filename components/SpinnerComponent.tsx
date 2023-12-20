"use client";
import { Button, Spinner } from "keep-react";

export const SpinnerComponent = () => {
  return (
    <div className="my-10">
      <Spinner color="failure" size="lg" />
      <Spinner color="gray" size="lg" />
      <Spinner color="info" size="lg" />
      <Spinner color="pink" size="lg" />
      <Spinner color="purple" size="lg" />
      <Spinner color="success" size="lg" />
      <Spinner color="warning" size="lg" />
    </div>
  );
};
