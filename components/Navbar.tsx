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
      <div className='bg-gray-900 z-10 flex items-center w-full h-40 border-b-4 border-yellow-500'>
        <div className='flex-1 flex flex-row h-4/6 w-full items-center justify-between ml-20'>
          <div className='text-yellow-500 text-4xl py-3 font-bold border-y-4 border-yellow-500'>
            Web3 Messanger Dapp
          </div>

          <div className='bg-yellow-600 rounded-lg px-10 py-2 mr-20 font-bold hover:bg-yellow-500 flex w-4/12 items-center '>
            {isConnected && <Avatar address={address!} />}
            <button
              className='flex'
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
