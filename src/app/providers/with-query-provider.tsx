import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    }
  }
})

export const withQueryProvider = (component: () => ReactNode) => () => (
    <QueryClientProvider client={queryClient}>
      {component()}
    </QueryClientProvider>
)