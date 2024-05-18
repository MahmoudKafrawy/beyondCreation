"use client";
import { useQueryStore } from "@/store/useQueryStore";
import { Button } from "@nextui-org/button";
import { DateRangePicker } from "@nextui-org/date-picker";
import { Select, SelectItem } from "@nextui-org/select";
import { useEffect, useRef, useState } from "react";

export function Filters() {
  const { setFilters, query, clearFilters } = useQueryStore();

  const [dateRange, setDateRange] = useState<any>({});
  const [category, setCategory] = useState<any>("");

  const categoryRef = useRef<any>();

  useEffect(() => {
    if (query == "") {
      setCategory([""]);
      setDateRange({});
      clearFilters();
    }
  }, [query]);

  return (
    <div className="py-5 grid grid-cols-1 lg:grid-cols-3 items-end gap-4">
      <DateRangePicker size="lg" value={dateRange} onChange={setDateRange} isDisabled={!query} />
      <div className="flex justify-between items-center gap-4">
        <Select
          isDisabled={!query}
          label="Select category"
          className="w-full"
          size="sm"
          radius="lg"
          ref={categoryRef}
          selectedKeys={[category]}
          onChange={(e) => setCategory(e.target.value)}
        >
          <SelectItem value={"Sports"} key={"Sports"}>
            Sports
          </SelectItem>
        </Select>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          className="bg-primary text-white w-[120px]"
          onClick={() => {
            setCategory([""]);
            setDateRange({});
            clearFilters();
          }}
          isDisabled={!query}
        >
          Clear Filters
        </Button>
        <Button
          className="bg-primary text-white w-[120px]"
          onClick={() => {
            setFilters({
              category: category,
              dateRange: { from: new Date(dateRange.start), to: new Date(dateRange.end) },
            });
          }}
          isDisabled={!query}
        >
          Apply
        </Button>
      </div>
    </div>
  );
}
