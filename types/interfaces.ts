export interface INEWS_API_RESPONSE {
  articles: IArticle[];
  totalResults: number;
}
export interface IArticle {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface Source {
  id?: any;
  name: string;
}

export interface INEW_YORK_TIMES_RESPONSE {
  status: string;
  copyright: string;
  num_results: number;
  results: Result[];
}

export interface Result {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column?: any;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: Media[];
  eta_id: number;
}

interface Media {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": Mediametadatum[];
}

interface Mediametadatum {
  url: string;
  format: string;
  height: number;
  width: number;
}
