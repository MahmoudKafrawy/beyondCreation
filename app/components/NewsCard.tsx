import { IArticle } from "@/types/interfaces";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import moment from "moment";

export function NewsCard({ article }: { article: IArticle }) {
  console.log(article);

  const imageSource = article?.urlToImage;

  const articleTitle = article?.title;

  const articleURL = article?.url;

  const articleData = article?.publishedAt;

  const articleDescription = article.description;

  const artiCleSource = article?.source.name;

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
              <p className="font-bold text-tiny">{articleDescription || articleTitle}</p>
              <p className="text-default-400 self-end">sources : {artiCleSource}</p>
            </div>
          </div>
          <div></div>
        </div>
      </CardBody>
    </Card>
  );
}
