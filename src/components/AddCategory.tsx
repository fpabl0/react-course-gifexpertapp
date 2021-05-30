import React, { useState } from 'react';

type AddCategoryProps = {
  setCategories: (value: React.SetStateAction<string[]>) => void;
}

const AddCategory = ({setCategories}: AddCategoryProps) => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(cs => [inputValue, ...cs]);
      setInputValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange} />
    </form>
  );
}

export default AddCategory;
