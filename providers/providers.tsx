"use client";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClientConfig] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 6 * 1000,
            refetchInterval: 10 * 1000,
          },
        },
      })
  );

  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClientConfig}>{children}</QueryClientProvider>
    </NextUIProvider>
  );
}
