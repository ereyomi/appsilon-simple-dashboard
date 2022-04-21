import React, { FunctionComponent, useState } from 'react';

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

const LgNav: FunctionComponent<any> = (): JSX.Element => {
  const [isOpenId, setIsOpenId] = useState<number>(3);
  return (
    <>
      <nav className='hidden md:flex w-screen h-[87px] fixed top-0 right-0 bg-white pl-[306px] items-center justify-center  z-[999]'>
        <ul className='p-0 flex flex-row items-center w-full'>
          {navLink.map((v: NavLinkT) => (
            <li
              className={`py-[10px] px-[18px] font-semibold ${
                isOpenId === v.id ? 'text-primary' : 'text-tertiary'
              }`}
              key={v.id}
              onClick={() => setIsOpenId(v.id)}
            >
              <div className='flex flex-col justify-center items-center'>
                <p>{v.label}</p>
                <div
                  className={`w-[16px] h-[2px] mt-[3px] ${
                    isOpenId === v.id ? 'bg-primary' : 'bg-white'
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

export default LgNav;
