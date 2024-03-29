import React, { FC, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { CatalogProduct } from '../../types/CatalogProduct';
import { ProductItem } from '../ProductItem/ProductItem';

import './MobileSwiper.scss';

type Props = {
  title: string;
  products: CatalogProduct[];
};

export const MobileSwiper: FC<Props> = ({ title, products }) => {
  const currentSlider = useRef(null);

  const [isSlider] = useState(true);

  return (
    <div className="home-page__mobile-swiper mobile-swiper">
      <h2 className="slider__title">{title}</h2>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper"
        ref={currentSlider}
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <ProductItem
              product={product}
              isSlider={isSlider}
              isProductsList={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
