import React from "react";
import { useAccount, useBalance } from "wagmi";

const NativeBalance = () => {
  const { address } = useAccount();
  const { data, isError, isLoading } = useBalance({ address });

  return (
    <div className='bg-gray-700/[.2] p-2 m-1 rounded-xl'>{`${data?.formatted.substr(0, 5)} ${
      data?.symbol
    }`}</div>
  );
};

export default NativeBalance;
