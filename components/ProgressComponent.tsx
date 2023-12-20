"use client";
import { Progress } from "keep-react";

export const ProgressComponent = () => {
  return (
    <div className="flex flex-col gap-3">
      <Progress
        progress={45}
        color="info"
        rounded={true}
        labelProgress={true}
      />
      <Progress
        progress={75}
        color="info"
        rounded={true}
        labelProgress={true}
      />
      <Progress
        progress={100}
        color="info"
        rounded={true}
        labelProgress={true}
      />
      <Progress
        progress={75}
        color="info"
        rounded={true}
        showPopupLabelProgress={true}
      />
    </div>
  );
};
