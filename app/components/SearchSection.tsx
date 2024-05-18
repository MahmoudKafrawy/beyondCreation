"use client";
import { useQueryStore } from "@/store/useQueryStore";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRef } from "react";
export function SearchSection() {
  const searchRef = useRef<any>();

  const { setQuery } = useQueryStore();

  return (
    <section className="flex items-center gap-8">
      <Input
        label="search"
        className="border-[#6db5ca]"
        size="md"
        ref={searchRef}
        isClearable
        onClear={() => setQuery("")}
      />
      <Button
        className="bg-primary text-white"
        size="lg"
        onClick={() => {
          setQuery(searchRef.current.value);
        }}
      >
        Search
      </Button>
    </section>
  );
}
