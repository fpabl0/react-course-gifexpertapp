import React from 'react'
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { Image } from '../../src/helpers/getGifs';

jest.mock('../../src/hooks/useFetchGifs');
const useFetchGifsMock = useFetchGifs as jest.MockedFunction<typeof useFetchGifs>;

describe('Tests on <GifGrid />', () => {

  const category = "Pokemon";

  test('should show the loading initially', () => {

    useFetchGifsMock.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />)
    expect(screen.getByText("Cargando...", { selector: "h2" })).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();

  });

  test('should show items when the images are loaded', () => {

    const gifs: Image[] = [
      { id: '1', title: 'Pikachu', url: 'https://images.com/pikachu.gif' },
      { id: '2', title: 'Larvitar', url: 'https://images.com/larvitar.gif' },
    ];

    useFetchGifsMock.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);

  });

});