import { useAccount, useNetwork, useConnect, useSwitchNetwork, Connector } from "wagmi";
import Image from "next/image";

import Spinner from "./ui/Spinner";
import { useEffect, useState } from "react";
import Address from "./ui/Address";
import Chain from "./ui/Chain";
import NativeBalance from "./ui/NativeBalance";
import { Avatar } from "./ui/Avatar";

const NavBar = () => {
  const { address, isConnected } = useAccount();
  const { chain, chains } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const { connect, connectors, error, isLoading } = useConnect();
  const [connector, setConnector] = useState(connectors[0]);

  useEffect(() => {
    if (chain?.unsupported) {
      switchNetwork!(chains[0].id);
    }
  }, [chain]);

  const handleConnect = async (connector: Connector) => {
    await connect({ connector });
  };

  return (
    <>
      <div className='bg-gray-900 z-10 flex items-center w-full h-1/6 border-b-4 border-yellow-500'>
        <div className='flex flex-row w-screen items-center justify-around mx-2 h-screen'>
          <div
            className='text-yellow-500 text-lg py-3 font-bold border-y-4 border-yellow-500            
            sm:text-xl
            md:text-2xl
            lg:text-2xl
            '>
            Web3 Messanger Dapp
          </div>

          <div
            className='bg-yellow-600 rounded-lg px-2 py-2 font-bold hover:bg-yellow-500 flex space-x-0 space-y-0 items-center justify-center
            md:flex:row'>
            {isConnected && <Avatar address={address!} />}
            <button
              className='flex flex-col space-x-0 space-y-0 md:flex-row'
              disabled={isConnected}
              key={connector.id}
              onClick={() => handleConnect(connector)}>
              {isLoading && !isConnected ? (
                "Connecting to Wallet"
              ) : isConnected ? (
                <>
                  <Address />
                  <Chain />
                  <NativeBalance />
                </>
              ) : (
                `Connect to Wallet`
              )}
              {isLoading && <Spinner />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
