import { Image } from '../helpers/getGifs';

type Props = Image;

export const GifItem = ({ title, url }: Props) => {

  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}
