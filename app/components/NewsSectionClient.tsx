"use client";
import { NEWS_API_1_ENDPOINTS } from "@/endpoints/newsAPI";
import { NEWS_YORK_TIMES_ENDPOINTS } from "@/endpoints/nyTimesAPI";
import { requester } from "@/lib/requester";
import { useQueryStore } from "@/store/useQueryStore";
import { INEWS_API_RESPONSE, INEW_YORK_TIMES_SEARCH } from "@/types/interfaces";
import { shuffleArrays } from "@/utils/shuffleArrays";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import moment from "moment";
import { NewYorkTimesCard } from "./NewYorkTimesCard";
import { NewsCard } from "./NewsCard";
import NewsCardSkeleton from "./NewsCardSkeleton";

export default function NewsSectionClient({ shuffledData }: { shuffledData?: any[] }) {
  const { query, filters } = useQueryStore();
  const { data: dataSource1 } = useQuery<INEWS_API_RESPONSE>({
    queryKey: ["source1", query, JSON.stringify(filters)],
    queryFn: () =>
      requester({
        endpoint: NEWS_API_1_ENDPOINTS.getEverything,
        queryParams: {
          apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY as string,
          q: query,
          ...(filters.dateRange.from ? { from: moment(filters.dateRange.from).format("YYYY-MM-DD") } : {}),
          ...(filters.dateRange.to ? { to: moment(filters.dateRange.to).format("YYYY-MM-DD") } : {}),
        },
      }),
    retry: 0,
    refetchInterval: 0,
    refetchOnWindowFocus: false,
    enabled: !!query || !Object.keys(filters.dateRange) || !!filters.category,
  });

  const { data: dataSource2, isFetching } = useQuery<INEW_YORK_TIMES_SEARCH>({
    queryKey: ["source2", query, JSON.stringify(filters)],
    queryFn: () =>
      requester({
        endpoint: NEWS_YORK_TIMES_ENDPOINTS.searchArticles,
        queryParams: {
          "api-key": process.env.NEXT_PUBLIC_NEW_YORK_TIMES_API_KEY as string,
          q: query,
          // ...(filters.category ? { fq: `news_desk:${filters.category}` } : {}),
          ...(filters.dateRange.from ? { begin_date: moment(filters.dateRange.from).format("YYYYMMDD") } : {}),
          ...(filters.dateRange.to ? { end_date: moment(filters.dateRange.to).format("YYYYMMDD") } : {}),
        },
      }),
    retry: 0,
    refetchInterval: 0,
    refetchOnWindowFocus: false,
    enabled: !!query || !Object.keys(filters.dateRange) || !!filters.category,
  });

  const queryData =
    dataSource1?.articles || dataSource2?.response.docs
      ? shuffleArrays(dataSource1?.articles, dataSource2?.response.docs)
      : [];

  const dataToShow = !!query || !Object.keys(filters.dateRange) || !!filters.category ? queryData : shuffledData;

  if (!dataToShow) return <>No data found</>;

  if (isFetching)
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    );

  return (
    <>
      <h1 className="text-2xl font-medium pb-4">{query ? "Search Results" : "Trending News"}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {dataToShow?.map((el: any, index: number) => {
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
              {el.source == "The New York Times" || el.source == "New York Times" ? (
                <NewYorkTimesCard key={el.url} article={el} />
              ) : (
                <NewsCard key={el.url} article={el} />
              )}
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
