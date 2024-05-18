import { Result } from "@/types/interfaces";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import moment from "moment";

export function NewYorkTimesCard({ article }: { article: Result }) {
  return (
    <Card>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <a href={article.url} target="_blank">
          <p className="text-large uppercase font-bold">{article.title}</p>
        </a>
        <small className="text-default-500">{moment(article.published_date).fromNow()}</small>
      </CardHeader>
      <CardBody>
        <div className="flex gap-2">
          <img
            src={article.media?.[0]?.["media-metadata"][0].url}
            alt={article.title}
            className="w-32 h-32 object-cover"
          />
          <p className="font-bold text-tiny">{article.abstract}</p>
        </div>
      </CardBody>
    </Card>
  );
}
