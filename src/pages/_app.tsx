// Default imports
import type { AppProps } from "next/app";
import "@/styles/globals.css";

// Layout
import MainLayout from "@/layout/MainLayout";

// Fontawesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { PaletteColorOptions, ThemeProvider, createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>APT | Job Search</title>
      </Head>

      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </QueryClientProvider>
    </>
  );
}
