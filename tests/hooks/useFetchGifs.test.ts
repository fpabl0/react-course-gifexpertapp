import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Tests on useFetchGifs', () => {

  test('should return the initial state', () => {

    const { result } = renderHook(() => useFetchGifs('Pokemon'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();

  });

  test('should return an image array and isLoading in false', async () => {

    const { result } = renderHook(() => useFetchGifs('Pokemon'));

    // wait until images array length is greater than 0.
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
    );

    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();

  });

});