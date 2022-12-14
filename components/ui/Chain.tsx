import React from "react";
import { useNetwork } from "wagmi";

const Chain = () => {
  const { chain } = useNetwork();

  return <div className='bg-gray-700/[.2] p-2 rounded-xl text-xs'>{`${chain?.name}`}</div>;
};

export default Chain;
