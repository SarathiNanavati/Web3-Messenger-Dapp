import "../styles/globals.css";
import type { AppProps } from "next/app";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { configureChains, createClient, WagmiConfig, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

///////////////////////Wagmi Configuration///////////////////////////////////////////////
//chains
const { chains, provider } = configureChains(
  [chain.goerli, chain.polygonMumbai],
  [
    // alchemyProvider({ apiKey: config.client[APIKEYNAME.POLYGONMUMBAI_ALCHEMY_API_KEY] }),
    publicProvider(),
  ]
);

// client
const wagmiClient = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Component {...pageProps} />;
      </WagmiConfig>
    </>
  );
}

export default MyApp;
