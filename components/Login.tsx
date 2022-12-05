import { useAccount, useNetwork, useConnect, useSwitchNetwork, Connector } from "wagmi";
import Image from "next/image";

import { useEvmWalletTokenBalances, useEvmNativeBalance } from "@moralisweb3/next";

const Login = () => {
  const { address, isConnected } = useAccount();
  const { chain, chains } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();

  console.log(address, chain);

  const handleConnect = async (connector: Connector) => {
    await connect({ connector });
    if (chain?.unsupported) {
      await switchNetwork!(chains[0].id);
    }
  };

  return (
    <>
      <div className='bg-black relative'>
        Login
        <h1>I am on login screen</h1>
        <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4'>
          <Image
            className='object-cover rounded-full'
            alt='logo'
            src='https://links.papareact.com/3pi'
            width={200}
            height={200}
          />
          {/* <button
            onClick={() => handleConnect()}>
            Login to Metaverse
          </button> */}

          {connectors.map((connector) => (
            <button
              className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'
              disabled={!connector.ready}
              key={connector.id}
              onClick={() => handleConnect(connector)}>
              {connector.name}
              {!connector.ready && " (unsupported)"}
              {isLoading && connector.id === pendingConnector?.id && " (connecting)"}
            </button>
          ))}

          {error && <div>{error.message}</div>}
        </div>
        <div className='w-full h-screen'>
          <Image
            alt='background image'
            src='https://links.papareact.com/55n'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
    </>
  );
};

export default Login;
