import "styles/globals.css";
import "styles/grid.css";

import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";

function MyApp({ Component, pageProps }: AppProps) {
  const { saveUserId } = useLocalStorage();

  useEffect(() => {
    // If no previous session, store new userId
    const id = localStorage.getItem("userId");
    if (!id) saveUserId();
  }, [saveUserId]);

  return <Component {...pageProps} />;
}

export default MyApp;
