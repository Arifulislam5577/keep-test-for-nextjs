"use client";
import { Rating } from "keep-react";

export const RatingComponent = () => {
  return (
    <div className="space-y-10">
      <Rating size={30}>
        <Rating.Star filledType="fill" />
        <Rating.Star filledType="fill" />
        <Rating.Star filledType="fill" />
        <Rating.Star filledType="fill" />
        <Rating.Star filledType="fill" />
      </Rating>

      <Rating size={30}>
        <Rating.Star filledType="fill" />
        <Rating.Star filledType="regular" />
        <Rating.Star filledType="duotone" />
        <Rating.Star filledType="bold" />
        <Rating.Star filledType="light" />
        <Rating.Star filledType="thin" />
      </Rating>

      <Rating size={30}>
        <Rating.Star starType="full" filledType="fill" />
        <Rating.Star starType="half" filledType="fill" />
      </Rating>

      <div className="flex w-full flex-col gap-2">
        <Rating.Advanced percentFilled={70}>5 star</Rating.Advanced>
        <Rating.Advanced percentFilled={17}>4 star</Rating.Advanced>
        <Rating.Advanced percentFilled={8}>3 star</Rating.Advanced>
        <Rating.Advanced percentFilled={4}>2 star</Rating.Advanced>
        <Rating.Advanced percentFilled={30}>1 star</Rating.Advanced>
      </div>
    </div>
  );
};
