import { getGifs } from '../../src/helpers/getGifs';


describe('Tests on getGifs.ts', () => {

  test('should return an array of Images', async () => {

    const imgs = await getGifs("Pokemon");
    expect(imgs.length).toBeGreaterThan(0);
    expect(imgs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });

  });

});