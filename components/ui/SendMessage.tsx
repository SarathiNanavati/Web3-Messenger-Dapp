import React, { useState } from "react";
import { useAccount } from "wagmi";
import { addNewMessage } from "../../store/slices/messageSlice";
import { useAppDispatch } from "../../store/store";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { address } = useAccount();
  const dispatch = useAppDispatch();

  const sendMessageHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!message) return;
    dispatch(addNewMessage({ message, userAddress: address!.toString() }));
    setMessage("");
  };

  return (
    <div className='flex-1 flex justify-center'>
      <form className='flex w-10/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-2 border-yellow-300'>
        <input
          className=' flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5'
          type='text'
          placeholder='Enter the message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit' onClick={sendMessageHandler} className='font-bold text-yellow-500'>
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
