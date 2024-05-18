import { TEndpoint } from "@/endpoints/config";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

export function requester<T>({
  endpoint,
  replace,
  options,
  axiosOptions,
  queryParams,
}: {
  endpoint: TEndpoint;
  replace?: { [key: string]: string };
  options?: { params?: { [key: string]: string }; data?: { [key: string]: string } };
  queryParams?: { [key: string]: string };
  axiosOptions?: AxiosRequestConfig;
}): Promise<T> {
  const { method } = endpoint;

  const { parsedURL } = parseRequestURL({ endpoint, replace, params: queryParams });

  return axios({
    url: parsedURL,
    data: options?.data,
    method,
    ...axiosOptions,
  }).then((res) => res.data);
}

function parseRequestURL({
  endpoint,
  replace,
  params,
}: {
  endpoint: TEndpoint;
  replace?: { [key: string]: string };
  params?: { [key: string]: string };
}) {
  let { url } = endpoint;

  if (replace) {
    Object.keys(replace).forEach((key) => {
      url = url.replace(`:${key}`, replace[key]);
    });
  }

  if (params) {
    url = url + "?" + new URLSearchParams(params).toString();
  }

  return { parsedURL: url };
}
