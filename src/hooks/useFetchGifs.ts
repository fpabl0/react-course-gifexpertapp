import { getGifs, Image } from '../helpers/getGifs';
import { useState, useEffect } from 'react';


export const useFetchGifs = (category: string) => {

  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadImages = async () => {
    const imgs = await getGifs(category);
    setImages(imgs);
    setIsLoading(false);
  };

  useEffect(() => {
    // in React.StrictMode (see main.tsx) this will be trigger two times, because React performs 
    // a second render in that mode to perfom verifications, however when it turns out to production, 
    // it will work as expected - just one time this should be executed.
    loadImages();
  }, []); // [] are the dependencies, if any dependency changes then the useEffect callback will be executed again, as we passed an empty array, then that callback will only be executed one time.

  return { images, isLoading };
};