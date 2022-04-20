import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { useUIContext } from '../Context';
import OtherNav from './otherNav';

type NavLinkT = {
  id: number;
  label: string;
  isActive: boolean;
};

const navLink: Array<NavLinkT> = [
  {
    id: 1,
    label: 'Overview',
    isActive: false,
  },
  {
    id: 2,
    label: 'Policy',
    isActive: false,
  },
  {
    id: 3,
    label: 'Reports',
    isActive: true,
  },
];

const Nav: FunctionComponent<any> = (): JSX.Element => {
  const { openSidebar } = useUIContext();
  return (
    <>
      <nav className='flex flex-row items-center justify-between p-[10px] w-screen fixed top-0 left-0 right-0 md:hidden'>
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
        <OtherNav />
      </nav>
      <nav className='hidden md:flex w-screen h-[87px] fixed top-0 right-0 bg-white pl-[306px] items-center justify-center'>
        <ul className='p-0 flex flex-row items-center w-full'>
          {navLink.map((v: NavLinkT) => (
            <li
              className={`py-[10px] px-[18px] font-semibold ${
                v.isActive ? 'text-primary' : 'text-tertiary'
              }`}
              key={v.id}
            >
              <div className='flex flex-col justify-center items-center'>
                <p>{v.label}</p>
                <div
                  className={`w-[16px] h-[2px] mt-[3px] ${
                    v.isActive ? 'bg-primary' : 'bg-white'
                  }`}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
