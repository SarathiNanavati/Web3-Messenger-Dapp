import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { configureChains, createClient, WagmiConfig, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import Layout from "../components/Layout";
import { Provider as ReduxStoreProvider } from "react-redux";
import { store } from "../store/store";

///////////////////////Wagmi Configuration///////////////////////////////////////////////
//chains
const { chains, provider } = configureChains(
  [chain.goerli, chain.polygonMumbai],
  [
    // alchemyProvider({ apiKey: config.client[APIKEYNAME.POLYGONMUMBAI_ALCHEMY_API_KEY] }),
    publicProvider(),
  ]
);
// ;
// client
const wagmiClient = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReduxStoreProvider store={store}>
        <WagmiConfig client={wagmiClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WagmiConfig>
      </ReduxStoreProvider>
    </>
  );
}

export default MyApp;
