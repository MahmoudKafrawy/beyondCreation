import { Card, CardBody, CardHeader } from "@nextui-org/react";
import moment from "moment";

export function NewYorkTimesCard({ article }: { article: any }) {
  // article in top and search results have different types

  const imageSource = article.multimedia?.[0]?.url
    ? "https://www.nytimes.com/" + article.multimedia[0].url
    : article.media?.[0]?.["media-metadata"][0].url;

  const articleTitle = article?.headline?.main || article.title;

  const articleURL = article?.web_url || article.url;

  const articleData = article?.pub_date || article.published_date;

  const articleDescription = article.abstract;

  return (
    <Card>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <a href={articleURL} target="_blank">
          <p className="text-large uppercase font-bold">{articleTitle}</p>
        </a>
        <p className="text-default-500 text-sm text-nowrap">{moment(articleData).fromNow()}</p>
      </CardHeader>
      <CardBody>
        <div className="flex-col gap-2">
          <div className="flex gap-2">
            <img src={imageSource} alt={articleTitle} className="w-32 h-32 object-cover" />
            <div className="flex flex-col justify-between w-full">
              <p className="font-bold text-tiny">{articleDescription}</p>
              <p className="text-default-400 self-end">sources : {article.source}</p>
            </div>
          </div>
          <div></div>
        </div>
      </CardBody>
    </Card>
  );
}
