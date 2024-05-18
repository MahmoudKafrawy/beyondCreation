"use client";
import { NEWS_YORK_TIMES_ENDPOINTS } from "@/endpoints/nyTimesAPI";
import { requester } from "@/lib/requester";
import { useQueryStore } from "@/store/useQueryStore";
import { INEW_YORK_TIMES_SEARCH } from "@/types/interfaces";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { NewYorkTimesCard } from "./NewYorkTimesCard";
import { NewsCard } from "./NewsCard";
import NewsCardSkeleton from "./NewsCardSkeleton";

export default function NewsSectionClient({ shuffledData }: { shuffledData?: any[] }) {
  const { query } = useQueryStore();

  const { data: dataSource2, isFetching } = useQuery<INEW_YORK_TIMES_SEARCH>({
    queryKey: ["source2", query],
    queryFn: () =>
      requester({
        endpoint: NEWS_YORK_TIMES_ENDPOINTS.searchArticles,
        queryParams: { "api-key": process.env.NEXT_PUBLIC_NEW_YORK_TIMES_API_KEY as string },
      }),
    retry: 0,
    refetchInterval: 0,
    refetchOnWindowFocus: false,
    enabled: !!query,
  });

  console.log(query, Boolean(query));

  if (isFetching)
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    );

  if (query)
    return (
      <>
        <h1 className="text-2xl font-medium pb-4">Search Results</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {dataSource2?.response.docs?.map((el: any) => (
            <NewYorkTimesCard key={el.url} article={el} />
          ))}
        </div>
      </>
    );

  return (
    <>
      <h1 className="text-2xl font-medium pb-4">Trending News </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {shuffledData?.map((el: any, index: number) => {
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
    </>
  );
}
