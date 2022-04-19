import React, { FunctionComponent } from 'react';
import { useUIContext } from '../Context';

const Sidebar: FunctionComponent<any> = (): JSX.Element => {
  const { displaySidebar } = useUIContext();
  console.log(displaySidebar);
  return (
    <div className='w-screen h-screen absolute inset-0 bg-black/[0.4] z-[1000] grid place-items-center'></div>
  );
};

export default Sidebar;
