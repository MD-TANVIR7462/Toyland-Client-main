import React from 'react';
import Benner from './Benner/Benner';
import Gelery from './gellery/Gelery';
import Featured from './FeaturedSection/Featured';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import TopSellersSection from '../TopSellerSection/TopSellerSection';
import useTiitle from '../../hooks/useTitle';
import Review from './Review/Review';
import Freesection from './Freesection/Freesection';
import Newsection from './Newsection/Newsection';

const HomeMain = () => {
   useTiitle('Home')
   return (
      <div>
        <Benner></Benner> 
        <Gelery></Gelery>
        <Review></Review>
        <Featured></Featured>
        <ShopByCategory></ShopByCategory>
        <Newsection></Newsection>
        <TopSellersSection></TopSellersSection>
        <Freesection></Freesection>
      </div>
   );
};

export default HomeMain;