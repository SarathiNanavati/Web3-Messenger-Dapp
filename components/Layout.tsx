import React from "react";
import NavBar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <div className='max-w-screen-2xl mx-auto h-screen bg-gradient-to-br from-black to-gray-800 overflow-hidden'>
        <NavBar />
        <div className='text-white text-xl'>{children}</div>
      </div>
    </>
  );
};

export default Layout;
