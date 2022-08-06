import { useEffect, useState } from 'react';
import { getGifs, Image } from "../helpers/getGifs";
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

type Props = {
  category: string;
};

export const GifGrid = ({ category }: Props) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }

      <div className='card-grid'>
        {images.map(img => (
          <GifItem key={img.id}
            {...img} /> // this part spreads all the img fields as properties in the component
        ))}
      </div>
    </>
  );
}
