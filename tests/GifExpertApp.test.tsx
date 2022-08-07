import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Tests on <GifExpertApp />', () => {

  test('should show the categories after type it into the input', () => {

    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form', { name: 'my-form' });

    fireEvent.input(input, { target: { value: "Pokemon" } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: "Dragon ball" } });
    fireEvent.submit(form);

    expect(screen.getByText("Pokemon")).toBeTruthy();
    expect(screen.getByText("Dragon ball")).toBeTruthy();

  });

});  