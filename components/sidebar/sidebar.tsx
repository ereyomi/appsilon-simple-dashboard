import React, { FunctionComponent } from 'react';

const Sidebar: FunctionComponent<any> = (): JSX.Element => {
  return (
    <div className='w-screen h-screen absolute inset-0 bg-black/[0.4] z-[1000] grid place-items-center'></div>
  );
};

export default Sidebar;
