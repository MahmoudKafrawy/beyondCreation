"use client";
import { Button } from "@nextui-org/button";
import { DateRangePicker } from "@nextui-org/date-picker";
import { Select, SelectItem } from "@nextui-org/select";

export function Filters() {
  return (
    <div className="py-5 grid grid-cols-1 lg:grid-cols-3 items-end gap-4">
      <DateRangePicker size="lg" />
      <div className="flex justify-between items-center gap-4">
        <Select label="Select category" className="max-w-xs" size="sm" radius="lg">
          <SelectItem value={"SS"} key={"SS"}>
            ss
          </SelectItem>
        </Select>
        <Button className="bg-primary text-white w-[120px] ">Apply</Button>
      </div>
    </div>
  );
}
