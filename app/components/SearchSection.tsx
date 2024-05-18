"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRef, useState } from "react";
export function SearchSection() {
  const [query, setQuery] = useState("");
  const searchRef = useRef<any>();

  // useQuery<INEWS_API_RESPONSE>({
  //   queryKey: ["source1", query],
  //   queryFn: () =>
  //     requester({
  //       endpoint: NEWS_API_1_ENDPOINTS.getTopHeadlines,
  //       queryParams: { apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY as string, country: "eg", q: query },
  //     }),
  //   retry: 0,
  //   refetchInterval: 0,
  //   refetchOnWindowFocus: false,
  // });

  // useQuery<INEW_YORK_TIMES_RESPONSE>({
  //   queryKey: ["source2"],
  //   queryFn: () =>
  //     requester({
  //       endpoint: NEWS_YORK_TIMES_ENDPOINTS.getTMostPopular,
  //       queryParams: { "api-key": process.env.NEXT_PUBLIC_NEW_YORK_TIMES_API_KEY as string },
  //     }),
  //   retry: 0,
  //   refetchInterval: 0,
  //   refetchOnWindowFocus: false,
  // });

  return (
    <section className="flex items-center gap-8">
      <Input label="search" className="border-[#6db5ca]" size="md" ref={searchRef} isClearable />
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
