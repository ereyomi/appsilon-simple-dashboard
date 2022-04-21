import React, { FunctionComponent, useState } from 'react';

const SmDropDownLinks: FunctionComponent<any> = (): JSX.Element => {
  const [isOpenState, setOpenState] = useState<boolean>(false);
  return (
    <div className='relative inline-block'>
      <button
        type='button'
        className='text-[25px] rotate-90 text-center text-secondary outline-none'
        onClick={() => setOpenState(!isOpenState)}
      >
        &#8230;
      </button>
      <div
        className={`w-max absolute z-[10000] right-0 shadow-sideBarShadow p-[20px] bg-white ${
          isOpenState ? 'block' : 'hidden'
        }`}
      >
        <ul className='p-0'>
          <li className='py-[10px]'>Overview</li>
          <li className='py-[10px]'>Policy</li>
          <li className='py-[10px]'>Overview</li>
        </ul>
      </div>
    </div>
  );
};

export default SmDropDownLinks;
