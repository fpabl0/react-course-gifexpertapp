import { GifImage } from '../models/gif_image';


export const getGifs = async ( category: string ): Promise<GifImage[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=Sj4CGWreMdFMm17amSM0NUrzcOnwByFT`;
  const resp = await fetch( url );
  const { data } = await resp.json();
  const gifs: GifImage[] = data.map( ( img: any ) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    } as GifImage;
  } );
  return gifs;
};