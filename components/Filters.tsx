"use client";
import { Select, SelectItem } from "@nextui-org/select";

export function Filters() {
  return (
    <div className="py-5 flex gap-5">
      <Select label="Select an animal" className="max-w-xs" size="sm">
        <SelectItem value={"SS"} key={"SS"}>
          ss
        </SelectItem>
      </Select>
      <Select label="Select an animal" className="max-w-xs" size="sm">
        <SelectItem value={"SS"} key={"SS"}>
          ss
        </SelectItem>
      </Select>
    </div>
  );
}
