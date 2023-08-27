"use client";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/themes/default";
import { GlobalStyle } from "@/styles/global";

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <main>
        <p>chat</p>
      </main>
    </ThemeProvider>
  );
}
