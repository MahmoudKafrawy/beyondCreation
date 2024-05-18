export enum MethodTypes {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

export type TEndpoint = {
  url: string;
  method: MethodTypes;
};

export type TEndpointsCollection = { [x: string]: TEndpoint };

export const NEWS_API_URL = process.env.NEXT_PUBLIC_NEWS_API_URL;
export const NEW_YORK_TIMES_API_URL = process.env.NEXT_PUBLIC_NEW_YORK_TIMES_API_URL;
