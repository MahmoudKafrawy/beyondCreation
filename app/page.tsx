import { Suspense } from "react";
import { Filters } from "./components/Filters";
import NewsCardSkeleton from "./components/NewsCardSkeleton";
import NewsSectionServerSide from "./components/NewsSectionServerSide";
import { SearchSection } from "./components/SearchSection";

export default async function Page() {
  return (
    <main className="container mx-auto p-6 min-h-screen">
      <SearchSection />
      <Filters />
      <Suspense
        fallback={
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <NewsCardSkeleton key={index} />
            ))}
          </div>
        }
      >
        <NewsSectionServerSide />
      </Suspense>
    </main>
  );
}
