import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


import { CustomButtonProps } from "@/types";
import { CustomButtons } from '.';

const Navbar = () => {
  return (
    <header className="w-full z-10 absolute">
      <nav
        className="max-w-[1440px] flex justify-between
    items-center sm:px-16 px-6 py-4 mx-auto"
      >
        <Link href="/" className="flex justify-center items-center">
         <Image
         src="/logo.svg"
         alt="Pix Cars Logo"
         width={118}
         height={18}
         className='object-contain' 
         />
          </Link>
          <CustomButtons
          title="Sign-in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          />
      </nav>
    </header>
  );
}

export default Navbar
