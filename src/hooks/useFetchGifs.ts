import { useEffect, useState } from 'react';
import { GifImage } from '../models/gif_image';
import { getGifs } from '../helpers/get_gifs';

export const useFetchGifs = ( category: string ) => {
  const [state, setState] = useState( {
    data: [] as GifImage[],
    loading: true,
  } )

  // useEffect will execute the passed callback, every time one of the dependencies 
  // (defined in the dependency array) change. Using useEffect with empty dependencies 
  // "[]" is like the init state in Flutter.
  useEffect( () => {
    getGifs( category )
      .then( ( gifs ) => {

        return setState( {
          data: gifs,
          loading: false,
        } );

      } );
  }, [category] );

  return state;
};