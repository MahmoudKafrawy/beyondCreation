import { Card, Skeleton } from "@nextui-org/react";

export default function NewsCardSkeleton() {
  return (
    <Card className="w-full space-y-5 p-4" radius="lg">
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
      <div className="flex gap-2">
        <Skeleton className="w-32 h-32 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="rounded-lg w-full h-4">
          <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
