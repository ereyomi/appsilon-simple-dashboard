import React, { FunctionComponent } from 'react';
import { useUIContext } from '../Context';

const Sidebar: FunctionComponent<any> = (): JSX.Element => {
  const { displaySidebar } = useUIContext();
  return (
    <div
      className={`${
        !displaySidebar && ' hidden '
      } w-screen h-screen absolute inset-0 bg-black/[0.4] z-[1000]`}
    >
          <div className='!w-[306px] h-screen shadow-sideBarShadow bg-white'>
              sdsdsd
      </div>
    </div>
  );
};

export default Sidebar;
