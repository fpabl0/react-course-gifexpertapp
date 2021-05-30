import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

type GifGridProps = {
  category: string;
}

const GifGrid = ({category}: GifGridProps) => {

  const {data, loading} = useFetchGifs(category);

  return (
    <>
    <h3 className="animate__animated animate__fadeIn">{category}</h3>
    {loading && <p className="animate__animated animate__flash">"Cargando..."</p>}
    <div className="card-grid">
        {
          data.map((i) => {
            return <GifItem key={i.id} {...i} />;
          })
        }
    </div>
    </>
  )
}

export default GifGrid;
