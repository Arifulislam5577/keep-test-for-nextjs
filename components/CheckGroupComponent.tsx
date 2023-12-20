"use client";
import { SetStateAction, useState } from "react";
import { CheckboxGroup } from "keep-react";

export const CheckboxGroupComponent = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelected(event.target.value);
  };

  return (
    <div className="space-y-10">
      <form className="space-y-4">
        <CheckboxGroup
          title="Static Design System"
          description="The largest UI kit and design system for Figma & Static code in the world."
          fieldName="Design System"
          value="value1"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <CheckboxGroup
          title="Static Design System"
          description="The largest UI kit and design system for Figma & Static code in the world."
          fieldName="Design System"
          value="value2"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <CheckboxGroup
          title="Static Design System"
          description="The largest UI kit and design system for Figma & Static code in the world."
          fieldName="Design System"
          value="value3"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <CheckboxGroup
          title="Static Design System"
          description="The largest UI kit and design system for Figma & Static code in the world."
          fieldName="Design System"
          value="value4"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
      </form>
      <form className="space-y-4">
        <CheckboxGroup
          title="Static Design System"
          description="The largest UI kit and design system for Figma & Static code in the world."
          checkboxType="circle"
          checkboxPosition="left"
          fieldName="Circle Checkbox"
          value="value5"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <CheckboxGroup
          title="Static Design System"
          description="The largest UI kit and design system for Figma & Static code in the world."
          checkboxType="circle"
          checkboxPosition="left"
          fieldName="Circle Checkbox"
          value="value6"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <CheckboxGroup
          title="Static Design System"
          description="The largest UI kit and design system for Figma & Static code in the world."
          checkboxType="circle"
          checkboxPosition="left"
          fieldName="Circle Checkbox"
          value="value7"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <CheckboxGroup
          title="Static Design System"
          description="The largest UI kit and design system for Figma & Static code in the world."
          checkboxType="circle"
          checkboxPosition="left"
          fieldName="Circle Checkbox"
          value="value8"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
      </form>
      <form className="space-y-4">
        <CheckboxGroup
          title="Paypal"
          description="Payment with paypal and get 10% discount"
          checkboxType="circle"
          img="./images/company/paypal.png"
          imgShape="circle"
          value="paypal"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <CheckboxGroup
          title="Stripe"
          description="Payment with stripe and get 10% discount"
          checkboxType="circle"
          img="./images/company/stripe.png"
          imgShape="circle"
          value="stripe"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <CheckboxGroup
          title="Visa"
          description="Payment with Visa and get 10% discount"
          checkboxType="circle"
          img="./images/company/Visa.png"
          imgShape="circle"
          value="Visa"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
        <CheckboxGroup
          title="Master Card"
          description="Payment with master card and get 10% discount"
          checkboxType="circle"
          img="./images/company/mastercard.png"
          imgShape="circle"
          value="mastercard"
          selected={selected}
          onOptionChange={handleOptionChange}
        />
      </form>
    </div>
  );
};
