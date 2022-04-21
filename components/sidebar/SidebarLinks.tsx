import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { menuT } from './sidebar.menu.type';

const SidebarLinks: FunctionComponent<menuT> = ({
  id,
  iconName,
  label,
  isActive,
}): JSX.Element => {
  return (
    <div
      className={`flex flex-row items-center mb-[26px] ${
        isActive ? ' text-primary ' : ' text-secondary '
      }`}
      key={id}
    >
      <Image
        src={`/svgs/${iconName}.svg`}
        alt={iconName}
        height={20}
        width={20}
      />
      <span className='ml-[25px] font-normal text-lg  text-inherit'>
        {label}
      </span>
    </div>
  );
};

export default SidebarLinks;
