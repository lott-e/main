import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";
import Wrapper from "./components/Wrapper/index";
import { UserProvider } from "../context/user";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("got pageProps.session", pageProps.session);

  console.log("got pageProps", pageProps);

  return (
    <SessionProvider session={pageProps.session}>
      <Wrapper>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </Wrapper>
    </SessionProvider>
  );
}

export default MyApp;
