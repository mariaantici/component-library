import "tailwindcss/tailwind.css";
import "@/styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setTheme('system');
  }, []);

  return (
    <ThemeProvider key={theme} defaultTheme="system" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}