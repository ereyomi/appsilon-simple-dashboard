import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { useUIContext } from '../Context';

const Nav: FunctionComponent<any> = (): JSX.Element => {
  const { openSidebar } = useUIContext();
  return (
    <nav className='flex flex-row items-center justify-between p-[10px] w-screen fixed top-0 left-0 right-0'>
      <button
        onClick={openSidebar}
        type='button'
        className='text-[25px] p-[5px] text-center text-secondary outline-none'
      >
        &#9776;
      </button>
      <Image src='/svgs/main-logo.svg' alt='main-logo' height={32} width={28} />
      <div className='relative inline-block'>
        <button
          type='button'
          className='text-[25px] rotate-90 text-center text-secondary outline-none'
        >
          &#8230;
        </button>
        <div className='w-max absolute z-[10000] right-0 shadow-sideBarShadow p-[10px]'>
          <ul className='p-0'>
            <li className='py-[10px]'>Overview</li>
            <li className='py-[10px]'>Policy</li>
            <li className='py-[10px]'>Overview</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
