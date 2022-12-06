import React from "react";
import { useAccount } from "wagmi";

const Address = () => {
  const { address } = useAccount();

  return (
    <div className='bg-gray-700/[.2] p-2 m-1 rounded-xl'>{`${address?.substr(
      0,
      7
    )}...${address?.substr(-5)}`}</div>
  );
};

export default Address;
