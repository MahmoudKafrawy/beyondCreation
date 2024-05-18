import { Result } from "@/types/interfaces";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import moment from "moment";

export function NewYorkTimesCard({ article }: { article: Result }) {
  return (
    <Card className="my-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <a href={article.url} target="_blank">
          <p className="text-large uppercase font-bold">{article.title}</p>
        </a>
        <small className="text-default-500">{moment(article.published_date).fromNow()}</small>
        <h4 className="font-bold text-tiny">{article.abstract}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <img src={article.media?.[0]?.["media-metadata"][0].url} alt={article.title} width={200} height={200} />
      </CardBody>
    </Card>
  );
}
