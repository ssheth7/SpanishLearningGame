import "../styles/globals.css"

import { SessionProvider } from "../utils/hooks/auth"

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
