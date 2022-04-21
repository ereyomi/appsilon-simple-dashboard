import React, { FunctionComponent } from 'react';
import styles from './Card.module.css';
type cardT = {
  mainPrice: number;
  policyPrice: number;
  claimPrice: number;
  policyPriceClassWidth: string;
  claimPriceWidth: string;
};

const cardsData: cardT[] = [
  {
    mainPrice: 1000,
    policyPrice: 400,
    claimPrice: 800,
    policyPriceClassWidth: 'w-4/5',
    claimPriceWidth: 'w-4/5',
  },
  {
    mainPrice: 2500,
    policyPrice: 1000,
    claimPrice: 1400,
    policyPriceClassWidth: 'w-4/5',
    claimPriceWidth: 'w-4/5',
  },
  {
    mainPrice: 2500,
    policyPrice: 1000,
    claimPrice: 1400,
    policyPriceClassWidth: 'w-4/5',
    claimPriceWidth: 'w-4/5',
  },
];

const Cards: FunctionComponent<any> = (): JSX.Element => {
  return (
    <div className='py-[20px] px-[20px] flex flex-wrap gap-[19px]'>
      {cardsData.map((card, index) => (
        <div
          key={index}
          className='w-full h-auto lg:w-[314px] lg:h-[298px] bg-white shadow-cardShadow px-[26px] pt-[8px] pb-[28px]'
        >
          <div className='relative'>
            <span className='font-normal text-xl text-muteColor'>
              {card.mainPrice}
            </span>{' '}
            <span className='text-[35px] leading-[47px] absolute top-0 ml-[3px] text-primary'>
              $
            </span>
          </div>
          <p className='text-[17px] leading-[23px] font-normal text-muteColor mb-[48px]'>
            Total Value of Disbursement
          </p>
          <div>
            <div className='flex flex-row items-center justify-between'>
              <p className='text-muteColor text-[17px] leading-[23px]'>
                Policy
              </p>
              <div className='relative'>
                <span className='font-normal text-[22px] leading-[29px] text-muteColor'>
                  {card.policyPrice}
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
                  className={`w-2/6 h-[5px] rounded-[5px] ${styles.cardBgGradientSecondary}`}
                ></div>
              </div>
            </div>
          </div>
          <div className='mt-[47px]'>
            <div className='flex flex-row items-center justify-between'>
              <p className='text-muteColor text-[17px] leading-[23px]'>Claim</p>
              <div className='relative'>
                <span className='font-normal text-[22px] leading-[29px] text-muteColor'>
                  {card.claimPrice}
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
                  className={`w-2/6 h-[5px] rounded-[5px] ${styles.cardBgGradientTertiary}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
