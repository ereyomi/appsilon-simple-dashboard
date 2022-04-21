import React, { FunctionComponent } from 'react';
import { useUIContext } from '../Context';
import Image from 'next/image';
import { menuT, sideBarMenus } from './sidebar.menu.type';
import SidebarLinks from './SidebarLinks';

const Sidebar: FunctionComponent<any> = (): JSX.Element => {
  const { displaySidebar, closeSidebar } = useUIContext();

  const overLayCloseSidebar = (e: any) => {
    closeSidebar();
  };

  const sidebarClose = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`${
        displaySidebar ? 'block' : ' hidden'
      } w-screen md:w-[306px] h-screen fixed inset-0 bg-black/[0.2] z-[1000] md:!block md:rounded-br-[20px]`}
      onClick={overLayCloseSidebar}
    >
      <div
        onClick={sidebarClose}
        className={` fixed w-[306px] h-screen shadow-sideBarShadow bg-white pt-[30px] pb-[33px] px-[58px] flex flex-col justify-between ${
          displaySidebar ? 'translate-x-[0%]' : '-translate-x-[100%]'
        } ease-in-out duration-300 md:!translate-x-[0%]`}
      >
        <div>
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
          <p className='text-center text-lg font-bold text-tertiary'>
            Hello ! Rusalba Ruiz
          </p>
          <p className='text-center text-xs font-normal text-secondary my-[4px]'>
            Welcome Back To Your Insurance Portal
          </p>
          <p className='font-normal text-[14px] leading-[19px] text-center'>
            <span className='text-secondary'>Your Plan : </span>
            <span className='text-[#33D69F]'>Free</span>
          </p>
          <div className='mt-[20px] mb-[50px] flex justify-center'>
            <button
              type='button'
              className='bg-primary rounded-[7px] px-[20px] py-[8px] text-white'
            >
              <span className='mr-[14px] text-[14px] leading-[19px] font-bold'>
                Create New Plan
              </span>
              <Image src='/svgs/plus.svg' alt='plus' height={12} width={12} />
            </button>
          </div>
          <div className='flex flex-col pl-[10px]'>
            {sideBarMenus.map((v: menuT, index: number) => (
              <SidebarLinks
                id={v.id}
                iconName={v.iconName}
                label={v.label}
                isActive={v.isActive}
                key={index}
              />
            ))}
          </div>
        </div>
        <footer className='w-full flex flex-row items-center justify-center'>
          <div className='flex flex-row items-center justify-center cursor-pointer'>
            <Image
              src='/svgs/log-out.svg'
              alt='log-out'
              height={18}
              width={18}
            />
            <p className='font-semibold text-[18px] leading-[24px] ml-[14px] text-secondary'>
              Log Out
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Sidebar;
