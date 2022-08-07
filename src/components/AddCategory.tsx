import { useState } from 'react';

type Props = {
  onNewCategory: (c: string) => void;
};

export const AddCategory = ({ onNewCategory }: Props) => {

  const [inputValue, setInputValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const v = inputValue.trim();
    if (v.length <= 1) return;
    onNewCategory(v);
    setInputValue("");
  }

  return (
    <form onSubmit={onFormSubmit} aria-label="my-form">
      <input type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onChange} />
    </form>
  );
}
