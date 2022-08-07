import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Tests on <AddCategory />', () => {

  test('should change the input text value', () => {

    render(<AddCategory onNewCategory={() => { }} />);
    const input = screen.getByRole<HTMLInputElement>('textbox');
    fireEvent.input(input, { target: { value: "Pokemon" } });
    expect(input.value).toBe("Pokemon");

  });

  test('should call onNewCategory if the input is not empty', () => {

    const inputValue = "Pokemon";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole<HTMLInputElement>('textbox');
    // to get the form, that form MUST have "aria-label" prop defined.
    const form = screen.getByRole('form', { name: "my-form" });

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);

  });

  test('should not call onNewCategory when the input is empty', () => {

    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form', { name: "my-form" });

    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);

  });

});