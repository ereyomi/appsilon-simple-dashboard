import React, { FunctionComponent } from 'react';
import Card from './card';
import styles from './Card.module.css';
import { cardT } from './card.type';

const cardsData: cardT[] = [
  {
    mainPrice: 1000,
    policyPrice: 400,
    claimPrice: 800,
    policyPriceClassWidth: 'w-2/5',
    claimPriceWidth: 'w-4/5',
  },
  {
    mainPrice: 2500,
    policyPrice: 1000,
    claimPrice: 1400,
    policyPriceClassWidth: 'w-3/6',
    claimPriceWidth: 'w-4/5',
  },
  {
    mainPrice: 2500,
    policyPrice: 1000,
    claimPrice: 1400,
    policyPriceClassWidth: 'w-3/6',
    claimPriceWidth: 'w-4/5',
  },
];

const Cards: FunctionComponent<any> = (): JSX.Element => {
  return (
    <div className='py-[20px] px-[20px] md:px-0 flex flex-wrap gap-[19px]'>
      {cardsData.map((card: cardT, index: number) => (
        <Card
          mainPrice={card.mainPrice}
          policyPrice={card.policyPrice}
          claimPrice={card.claimPrice}
          policyPriceClassWidth={card.policyPriceClassWidth}
          claimPriceWidth={card.claimPriceWidth}
          key={index}
        />
      ))}
    </div>
  );
};

export default Cards;
