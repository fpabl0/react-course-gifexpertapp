
export type Image = {
  id: string;
  title: string;
  url: string;
};

export const getGifs = async (category: string): Promise<Image[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=sYtywronjQ7jNi2LruO1Ko26qcraYRN6`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const images: Image[] = data.map((img: any) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return images;
};