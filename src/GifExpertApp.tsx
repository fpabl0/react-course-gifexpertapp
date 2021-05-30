import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

  const [categories, setCategories] = useState(["One Punch"]);

  // const handleAdd = () => {
  //   setCategories([...categories, "Pokemon"]);
  // };

  return (
    <>
    <h2>GifExpertApp</h2> 
    <AddCategory setCategories={setCategories} />
    <hr />

      {
        categories.map((c) => {
          return <GifGrid key={c} category={c} />
        })
      }

    </>
  );
}

export default GifExpertApp;

