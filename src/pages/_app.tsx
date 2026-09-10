import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Appshell from "@/components/commons/Appshell";
import { SessionProvider } from "next-auth/react";
import onErrorHandler from "@/libs/axios/responseHandler";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      throwOnError(error) {
        onErrorHandler(error);
        return false;
      },
    },
    mutations: {
      onError: onErrorHandler,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <HeroUIProvider>
          <Appshell>
            <Component {...pageProps} />
          </Appshell>
        </HeroUIProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
