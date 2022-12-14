import { MoralisNextApi } from "@moralisweb3/next";
import { getMessages, MessageInfo } from "../store/slices/messageSlice";
import { useAppSelector } from "../store/store";
import Message from "./ui/Message";
import SendMessage from "./ui/SendMessage";

const Messages = () => {
  const { messages } = useAppSelector(getMessages);

  return (
    <>
      <div
        className='h-4/6 space-y-10 p-4 flex flex-col overflow-y-scroll overflow-x-hidden
          scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-yellow-800
        '>
        {messages.map((message, index) => {
          return <Message key={index} message={message} />;
        })}
      </div>
      <div className='flex justify-center'>
        <SendMessage />
      </div>
    </>
  );
};

export default Messages;
