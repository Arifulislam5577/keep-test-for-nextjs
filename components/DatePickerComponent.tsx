"use client";
import { useState } from "react";
import { DatePicker } from "keep-react";

export const DatePickerComponent = () => {
  const [rangeDate, setRangeDate] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>();
  return (
    <DatePicker showTwoMonth={true} rangeDate={setRangeDate}>
      <DatePicker.Range />
    </DatePicker>
  );
};
