import { useAccount } from "wagmi";
import Messages from "./Messages";

const Login = () => {
  const { isConnected } = useAccount();

  return (
    <>
      {!isConnected && (
        <div className='font-bold text-yellow-500 text-2xl text-center w-full h-screen my-10'>
          Please click connect to Proceed
        </div>
      )}
      {isConnected && <Messages />}
    </>
  );
};

export default Login;
