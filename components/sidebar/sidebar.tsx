import React, { FunctionComponent } from 'react';
import { useUIContext } from '../Context';
import Image from 'next/image';
import { menuT, sideBarMenus } from './sidebar.menu';

const Sidebar: FunctionComponent<any> = (): JSX.Element => {
  const { displaySidebar } = useUIContext();
  return (
    <div
      className={`${
        !displaySidebar && ' hidden '
      } w-screen h-screen absolute inset-0 bg-black/[0.4] z-[1000]`}
    >
      <div className='!w-[306px] h-screen shadow-sideBarShadow bg-white pt-[30px] px-[58px]'>
        <div className='flex flex-row items-center justify-center'>
          <Image
            src='/svgs/main-logo.svg'
            alt='main-logo'
            height={32}
            width={28}
          />
          <p className='text-lg font-semibold ml-[12px]'>Insurance Portal</p>
        </div>
        <div className='flex justify-center mt-[22px] mb-[8px]'>
          <Image
            src='/svgs/picture.svg'
            alt='profile picture'
            height={78}
            width={78}
          />
        </div>
        <p className='text-center text-lg font-bold text-[#888CB7]'>
          Hello ! Rusalba Ruiz
        </p>
        <p className='text-center text-xs font-normal text-[#A2A4B9] my-[4px]'>
          Welcome Back To Your Insurance Portal
        </p>
        <p className='font-normal text-[14px] leading-[19px] text-center'>
          <span className='text-[#A2A4B9]'>Your Plan : </span>
          <span className='text-[#33D69F]'>Free</span>
        </p>
        <div className='mt-[20px] mb-[50px] flex justify-center'>
          <button
            type='button'
            className='bg-primary rounded-[7px] px-[20px] py-[8px] text-white'
          >
            <span className='mr-[14px]'>Create New Plan</span>
            <Image src='/svgs/plus.svg' alt='plus' height={12} width={12} />
          </button>
        </div>
        <div className='flex flex-col pl-[10px]'>
          {sideBarMenus.map((v: menuT) => (
            <div className='flex flex-row items-center mb-[26px]'>
              <Image
                src={`/svgs/${v.iconName}.svg`}
                alt={v.iconName}
                height={20}
                width={20}
              />
              <span className='ml-[25px]'>{v.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
