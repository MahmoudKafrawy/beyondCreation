"use client";
import { NEWS_API_1_ENDPOINTS } from "@/endpoints/newsAPI";
import { NEWS_YORK_TIMES_ENDPOINTS } from "@/endpoints/nyTimesAPI";
import { requester } from "@/lib/requester";
import { INEWS_API_RESPONSE, INEW_YORK_TIMES_RESPONSE } from "@/types/interfaces";
import { shuffleArrays } from "@/utils/shuffleArrays";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { NewYorkTimesCard } from "./NewYorkTimesCard";
import { NewsCard } from "./NewsCard";

export default function NewsSectionClient() {
  const { data: dataSource1, isFetching } = useQuery<INEWS_API_RESPONSE>({
    queryKey: ["source1"],
    retry: 0,
    queryFn: () =>
      requester({
        endpoint: NEWS_API_1_ENDPOINTS.getTopHeadlines,
        queryParams: { apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY as string, country: "eg" },
      }),
    refetchInterval: 0,
    refetchOnWindowFocus: false,
  });

  const { data: dataSource2 } = useQuery<INEW_YORK_TIMES_RESPONSE>({
    queryKey: ["source2"],
    queryFn: () =>
      requester({
        endpoint: NEWS_YORK_TIMES_ENDPOINTS.getTMostPopular,
        queryParams: { "api-key": process.env.NEXT_PUBLIC_NEW_YORK_TIMES_API_KEY as string },
      }),
    retry: 0,
    refetchInterval: 0,
    refetchOnWindowFocus: false,
  });
  const shuffleData =
    (dataSource1?.articles || dataSource2?.results) && shuffleArrays(dataSource1?.articles, dataSource2?.results);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {shuffleData?.map((el, index) => {
        // we can make type check better by using `instanceof`
        // used el.url because its unique and shared between 2 sources
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
          >
            {"id" in el ? <NewYorkTimesCard key={el.url} article={el} /> : <NewsCard key={el.url} article={el} />}
          </motion.div>
        );
      })}
    </div>
  );
}
