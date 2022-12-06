import React from "react";
import { useAccount } from "wagmi";
import { MessageInfo } from "../../store/slices/messageSlice";
import { Avatar } from "./Avatar";
import TimeAgo from "timeago-react";

type MessageProps = {
  message: MessageInfo;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  const { address } = useAccount();

  const isUserAddress = message.userAddress === address!.toString();

  return (
    <div className={`flex items-end space-x-2 relative ${isUserAddress && "justify-end"}`}>
      <div className={`relative h-8 w-8 ${isUserAddress && "order-last ml-2"}`}>
        <Avatar address={message.userAddress!} />
      </div>
      <div
        className={`flex space-x-3 p-3 rounded-lg font-bold ${
          isUserAddress
            ? "rounded-br-none bg-yellow-400 text-black"
            : "rounded-bl-none bg-yellow-800 text-gray-300"
        }`}>
        <p>{message.message}</p>
      </div>
      <TimeAgo
        className={`text-[10px] italic text-gray-400 ${isUserAddress && "order-first"}`}
        datetime={message.createdAt}
      />
    </div>
  );
};

export default Message;
