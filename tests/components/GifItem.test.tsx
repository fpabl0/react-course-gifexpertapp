import React from 'react'
import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Tests on <GifItem />', () => {

  const title = "Pikachu";
  const url = "https://www.pokemon.com/pikachu.gif"

  test('should match the snapshot', () => {

    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot();

  });

  test('should show the <img /> with the url and alt text given', () => {

    render(<GifItem title={title} url={url} />)
    // screen.debug();
    const img = screen.getByAltText<HTMLImageElement>(title);
    expect(img).toBeTruthy();
    expect(img.alt).toBe(title);
    expect(img.src).toBe(url);

  });

  test('should show the title in the component', () => {

    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title, { selector: 'p' })).toBeTruthy();

  });

});