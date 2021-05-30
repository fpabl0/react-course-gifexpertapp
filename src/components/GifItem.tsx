import React from 'react';
import { GifImage } from '../models/gif_image';

const GifItem = ( {title, url}: GifImage ) => {
  return (
    // In react we need to use "className" instead of "class"
    <div className="card animate__animated animate__fadeIn"> 
      <img src={url} alt={title} />
      <p> {title} </p>
    </div>
  )
}

export default GifItem;
