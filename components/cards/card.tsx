import React, { FunctionComponent } from 'react';
import styles from './Card.module.css';
import { cardT } from './card.type';

const Card: FunctionComponent<cardT> = ({
  mainPrice,
  policyPrice,
  claimPrice,
  policyPriceClassWidth,
  claimPriceWidth,
}): JSX.Element => {
  return (
    <div
      className='w-full h-auto lg:w-[314px] lg:h-[298px] bg-white shadow-cardShadow px-[26px] pt-[8px] pb-[28px]'
    >
      <div className='relative'>
        <span className='font-normal text-xl text-muteColor'>
          {mainPrice}
        </span>
        <span className='text-[35px] leading-[47px] absolute top-0 ml-[3px] text-primary'>
          $
        </span>
      </div>
      <p className='text-[17px] leading-[23px] font-normal text-muteColor mb-[48px]'>
        Total Value of Disbursement
      </p>
      <div>
        <div className='flex flex-row items-center justify-between'>
          <p className='text-muteColor text-[17px] leading-[23px]'>Policy</p>
          <div className='relative'>
            <span className='font-normal text-[22px] leading-[29px] text-muteColor'>
              {policyPrice}
            </span>
            <span className='text-[13px] leading-[17px] absolute top-0 ml-[3px] text-muteColor'>
              $
            </span>
          </div>
        </div>
        <div className='mt-[8px]'>
          <div
            className={`w-full h-[5px] rounded-[5px] ${styles.cardBgGradientPrimary}`}
          >
            <div
              className={`${policyPriceClassWidth} h-[5px] rounded-[5px] ${styles.cardBgGradientSecondary}`}
            ></div>
          </div>
        </div>
      </div>
      <div className='mt-[47px]'>
        <div className='flex flex-row items-center justify-between'>
          <p className='text-muteColor text-[17px] leading-[23px]'>Claim</p>
          <div className='relative'>
            <span className='font-normal text-[22px] leading-[29px] text-muteColor'>
              {claimPrice}
            </span>
            <span className='text-[13px] leading-[17px] absolute top-0 ml-[3px] text-muteColor'>
              $
            </span>
          </div>
        </div>
        <div className='mt-[8px]'>
          <div
            className={`w-full h-[5px] rounded-[5px] ${styles.cardBgGradientPrimary}`}
          >
            <div
              className={`${claimPriceWidth} h-[5px] rounded-[5px] ${styles.cardBgGradientTertiary}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
