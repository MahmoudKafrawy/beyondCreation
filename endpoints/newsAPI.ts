import { NEWS_API_URL, MethodTypes, TEndpointsCollection } from "./config";

export const NEWS_API_1_ENDPOINTS = {
  getEverything: {
    url: NEWS_API_URL + "/v2/everything",
    method: MethodTypes.GET,
  },
  getTopHeadlines: {
    url: NEWS_API_URL + "/v2/top-headlines",
    method: MethodTypes.GET,
  },
} satisfies TEndpointsCollection;
