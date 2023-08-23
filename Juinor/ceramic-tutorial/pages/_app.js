import '../styles/globals.css'
import { Provider } from "@self.id/react";
import { Provider as DefaultProvider } from "@self.id/react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
