import { NEW_YORK_TIMES_API_URL, MethodTypes, TEndpointsCollection } from "./config";

export const NEWS_YORK_TIMES_ENDPOINTS = {
  getTMostPopular: {
    url: NEW_YORK_TIMES_API_URL + "/svc/mostpopular/v2/viewed/1.json",
    method: MethodTypes.GET,
  },
} satisfies TEndpointsCollection;
