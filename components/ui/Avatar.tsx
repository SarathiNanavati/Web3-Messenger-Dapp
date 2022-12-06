import Image from "next/image";
import React from "react";
import { Address, useAccount, useEnsAvatar } from "wagmi";

interface AvatarProps {
  address: string;
}

export const Avatar: React.FC<AvatarProps> = ({ address }) => {
  const { data: avatar } = useEnsAvatar({ address: `0x${address}` });

  if (avatar === "") return <></>;
  return (
    <div className='w-16 h-16 bg-gray-700/[.2] p-2 m-1 rounded-full'>
      <img
        className='rounded-full'
        alt='userAvatar'
        src={avatar! || `https://avatars.dicebear.com/api/pixel-art/${address}.svg`}
      />
    </div>
  );
};
