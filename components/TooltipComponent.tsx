"use client";
import { Button, Tooltip } from "keep-react";

export const TooltipComponent = () => {
  return (
    <div className="flex gap-5">
      <Tooltip
        content="Tooltips text here"
        trigger="hover"
        placement="top"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" type="primary">
          Tooltip Top
        </Button>
      </Tooltip>
      <Tooltip
        content="Tooltips text here"
        trigger="hover"
        placement="bottom"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" type="primary">
          Tooltip Bottom
        </Button>
      </Tooltip>
      <Tooltip
        content="Tooltips text here"
        trigger="hover"
        placement="left"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" type="primary">
          Tooltip Left
        </Button>
      </Tooltip>
      <Tooltip
        content="Tooltips text here"
        trigger="hover"
        placement="right"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" type="primary">
          Tooltip Right
        </Button>
      </Tooltip>
    </div>
  );
};
