import { NEWS_API_1_ENDPOINTS } from "@/endpoints/newsAPI";
import { NEWS_YORK_TIMES_ENDPOINTS } from "@/endpoints/nyTimesAPI";
import { queryClient } from "@/lib/queryClient";
import { requester } from "@/lib/requester";
import dynamic from "next/dynamic";
const NewsSectionClient = dynamic(() => import("./NewsSectionClient"), { ssr: false });

export default async function NewsSectionServerSide() {
  await queryClient.prefetchQuery({
    queryKey: ["source1"],
    queryFn: () =>
      requester({
        endpoint: NEWS_API_1_ENDPOINTS.getTopHeadlines,
        queryParams: { apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY as string, country: "eg" },
      }),
    staleTime: 60 * 1000 * 15,
  });

  await queryClient.prefetchQuery({
    queryKey: ["source2"],
    queryFn: () =>
      requester({
        endpoint: NEWS_YORK_TIMES_ENDPOINTS.getTMostPopular,
        queryParams: { "api-key": process.env.NEXT_PUBLIC_NEW_YORK_TIMES_API_KEY as string },
      }),
    staleTime: 60 * 1000 * 15,
  });

  return <NewsSectionClient />;
}
