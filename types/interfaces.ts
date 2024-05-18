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

export interface INEW_YORK_TIMES_SEARCH {
  status: string;
  copyright: string;
  response: Response;
}

interface Response {
  docs: IDoc[];
  meta: Meta;
}

interface Meta {
  hits: number;
  offset: number;
  time: number;
}

export interface IDoc {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  print_page: string;
  source: string;
  multimedia: any[];
  headline: Headline;
  keywords: Keyword[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: Byline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
  print_section?: string;
}

interface Byline {
  original?: string;
  person: (Person | Person2)[];
  organization?: any;
}

interface Person2 {
  firstname: string;
  middlename?: any;
  lastname: string;
  qualifier?: any;
  title?: any;
  role: string;
  organization: string;
  rank: number;
}

interface Person {
  firstname?: any;
  middlename?: any;
  lastname?: any;
  qualifier?: any;
  title?: any;
  role: string;
  organization: string;
  rank: number;
}

interface Keyword {
  name: string;
  value: string;
  rank: number;
  major: string;
}

interface Headline {
  main: string;
  kicker?: string;
  content_kicker?: any;
  print_headline: string;
  name?: any;
  seo?: any;
  sub?: any;
}
