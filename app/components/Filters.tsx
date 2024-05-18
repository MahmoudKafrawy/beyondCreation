"use client";
import { DateRangePicker } from "@nextui-org/date-picker";
import { Select, SelectItem } from "@nextui-org/select";

export function Filters() {
  return (
    <div className="py-5 flex gap-5">
      <Select label="Select an animal" className="max-w-xs" size="sm" radius="lg">
        <SelectItem value={"SS"} key={"SS"}>
          ss
        </SelectItem>
      </Select>
      <DateRangePicker size="lg" />
    </div>
  );
}
