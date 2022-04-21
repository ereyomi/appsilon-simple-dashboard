import React, { FunctionComponent } from 'react';
import { useUIContext } from '../Context';
import LgNav from './lgNav';
import SmNav from './smNav';

const Nav: FunctionComponent<any> = (): JSX.Element => {
  return (
    <>
      <SmNav />
      <LgNav />
    </>
  );
};

export default Nav;
