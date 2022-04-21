import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { useUIContext } from '../Context';
import SmDropDownLinks from './smDropDownLinks';

const SmNav: FunctionComponent<any> = (): JSX.Element => {
  const { openSidebar } = useUIContext();
  return (
    <>
      <nav className='flex flex-row items-center justify-between h-[87px] p-[10px] w-screen fixed top-0 left-0 right-0 md:hidden bg-white z-[999]'>
        <button
          onClick={openSidebar}
          type='button'
          className='text-[25px] p-[5px] text-center text-secondary outline-none'
        >
          &#9776;
        </button>
        <Image
          src='/svgs/main-logo.svg'
          alt='main-logo'
          height={32}
          width={28}
        />
        <SmDropDownLinks />
      </nav>
    </>
  );
};

export default SmNav;
