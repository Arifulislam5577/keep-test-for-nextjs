"use client";
import { Button, Steps } from "keep-react";
import { Club, DownloadSimple, Globe } from "phosphor-react";
import { useState } from "react";

export const StepComponent = () => {
  const [step, setStep] = useState(0);
  return (
    <>
      <Steps stepType="icon">
        <Steps.Item
          active={step === 0}
          completed={step >= 1}
          icon={<Globe size={20} />}
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Steps.Item
          completed={step >= 2}
          active={step === 1}
          icon={<DownloadSimple size={20} />}
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Steps.Item
          completed={step === 3}
          active={step === 2}
          icon={<Club size={20} />}
          title="Visit Keep Design Site"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </Steps>
      <div className="flex items-center justify-center mt-6">
        <Button
          size="sm"
          type="primary"
          disabled={step === 3}
          onClick={() => setStep((prev) => prev + 1)}
        >
          {step === 3 ? "Completed" : "Next Step"}
        </Button>
      </div>
    </>
  );
};
