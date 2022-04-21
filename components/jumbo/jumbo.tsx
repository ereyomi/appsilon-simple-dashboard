import React, { FunctionComponent } from 'react';
import Image from 'next/image';

const Jumbo: FunctionComponent<any> = (): JSX.Element => {
  return (
    <div className='w-full md:w-5/6 h-[311px] overflow-hidden relative bg-[#F8F9FF] shadow-jumbotronShadow'>
      <img
        src='/svgs/jumb-img.svg'
        alt='jumb-img'
        className='absolute bottom-0 left-0 w-4/6 md:w-3/6'
      />
      <img
        src='./svgs/curves.svg'
        alt='nbnnb'
        className='absolute bottom-0 left-0 right-0 w-full'
      />
      <div className='pt-[20px] md:pt-0 px-[20px] relative z-10 md:absolute lg:right-[72px]  md:top-[60px] lg:top-[107px]'>
        <p className='font-semibold text-[30px] leading-[30px] text-center text-muteColor'>
          20% Safe On Your First Account
        </p>
        <div className='flex flex-col md:flex-row items-center md:justify-center py-[10px] gap-[10px]'>
          <span className='px-[13px] py-[6px] border border-dashed border-muteColor rounded-[5px] text-muteColor text-[18px] leading-[16px] md:text-[22px] md:leading-[29px] font-normal'>
            NEWBIE20
          </span>
          <span className='text-muteColor text-[18px] leading-[16px] md:text-[22px] md:leading-[29px] font-semibold'>
            Copy Code
          </span>
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
