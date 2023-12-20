"use client";
import { SetStateAction, useState } from "react";
import { Label, Radio } from "keep-react";

export const RadioComponent = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelected(event.target.value);
  };

  return (
    <div className="space-y-10">
      <fieldset className="flex flex-col gap-3" id="radio">
        <legend className="mb-3">Choose your favorite country</legend>
        <div className="flex items-center gap-2">
          <Radio
            sizing="lg"
            id="country-1"
            name="favorite-country"
            selected={selected}
            onOptionChange={handleOptionChange}
            radioShape="circle"
            value="USA"
          />
          <Label htmlFor="country-1">United States</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            sizing="lg"
            id="country-2"
            name="favorite-country"
            selected={selected}
            onOptionChange={handleOptionChange}
            radioShape="circle"
            value="Germany"
          />
          <Label htmlFor="country-2">Germany</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            sizing="lg"
            id="country-3"
            name="favorite-country"
            selected={selected}
            onOptionChange={handleOptionChange}
            radioShape="circle"
            value="Spain"
          />
          <Label htmlFor="country-3">Spain</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            sizing="lg"
            id="country-4"
            name="favorite-country"
            selected={selected}
            onOptionChange={handleOptionChange}
            radioShape="circle"
            value="China"
            disabled={true}
          />
          <Label htmlFor="country-4" disabled={true}>
            China (disabled)
          </Label>
        </div>
      </fieldset>
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-3">Choose your favorite country</legend>
        <div className="flex items-center gap-2">
          <Radio
            sizing="lg"
            id="country-05"
            name="countries"
            selected={selected}
            onOptionChange={handleOptionChange}
            radioShape="square"
            value="USA"
          />
          <Label htmlFor="country-05">United States</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            sizing="lg"
            id="country-06"
            name="countries"
            selected={selected}
            onOptionChange={handleOptionChange}
            radioShape="square"
            value="Germany"
          />
          <Label htmlFor="country-06">Germany</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            sizing="lg"
            id="country-07"
            name="countries"
            selected={selected}
            onOptionChange={handleOptionChange}
            radioShape="square"
            value="Spain"
          />
          <Label htmlFor="country-07">Spain</Label>
        </div>

        <div className="flex items-center gap-2">
          <Radio
            sizing="lg"
            id="country-08"
            name="countries"
            selected={selected}
            onOptionChange={handleOptionChange}
            radioShape="square"
            value="China"
            disabled={true}
          />
          <Label htmlFor="country-08" disabled={true}>
            China (disabled)
          </Label>
        </div>
      </fieldset>
    </div>
  );
};
