import { Filters } from "@/components/Filters";
import { queryClient } from "@/lib/queryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";
import NewsSectionServerSide from "./components/NewsSectionServerSide";
import { SearchSection } from "./components/SearchSection";

export default async function Page() {
  return (
    <main className="container mx-auto h-screen p-6">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SearchSection />
        <Filters />
        <Suspense fallback={<div>Loading...</div>}>
          <NewsSectionServerSide />
        </Suspense>
      </HydrationBoundary>
    </main>
  );
}
