import React from 'react';
import './index.scss';
import Header from '@/components/Header';
import store from '../../store';

const Home = () => {
  console.log(1122222, store.getState().userInfo.token);
  return (
    <div className='home'>
      <Header />
    </div>
  );
};

export default Home;
