import { IArticle } from "@/types/interfaces";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import moment from "moment";

export function NewsCard({ article }: { article: IArticle }) {
  return (
    <Card className="my-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <a href={article.url} target="_blank">
          <p className="uppercase font-bold text-large">{article.title}</p>
        </a>
        <small className="text-default-500">{moment(article.publishedAt).fromNow()}</small>
        <h4 className="font-bold text-tiny ">{article.description}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <img src={article.urlToImage} alt={article.title} width={200} height={200} />
      </CardBody>
    </Card>
  );
}
