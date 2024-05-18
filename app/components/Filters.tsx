"use client";
import { useQueryStore } from "@/store/useQueryStore";
import { Button } from "@nextui-org/button";
import { DateRangePicker } from "@nextui-org/date-picker";
import { Select, SelectItem } from "@nextui-org/select";
import { useRef, useState } from "react";

export function Filters() {
  const { setFilters } = useQueryStore();

  const [dateRange, setDateRange] = useState<any>({});
  const [category, setCategory] = useState<any>("");

  const categoryRef = useRef<any>();
  return (
    <div className="py-5 grid grid-cols-1 lg:grid-cols-3 items-end gap-4">
      <DateRangePicker size="lg" value={dateRange} onChange={setDateRange} />
      <div className="flex justify-between items-center gap-4">
        <Select
          label="Select category"
          className="max-w-xs"
          size="sm"
          radius="lg"
          ref={categoryRef}
          selectedKeys={[category]}
          onChange={(e) => setCategory(e.target.value)}
        >
          <SelectItem value={"SS"} key={"SS"}>
            ss
          </SelectItem>
        </Select>
        <Button
          className="bg-primary text-white w-[120px]"
          onClick={() => {
            setCategory([""]);
            setDateRange({});
            setFilters({});
          }}
        >
          clear
        </Button>
        <Button
          className="bg-primary text-white w-[120px]"
          onClick={() => {
            setFilters({
              category: category,
              dateRange: { from: new Date(dateRange.start), to: new Date(dateRange.end) },
            });
          }}
        >
          Apply
        </Button>
      </div>
    </div>
  );
}
