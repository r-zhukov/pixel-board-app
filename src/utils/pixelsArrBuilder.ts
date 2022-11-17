const pixelsArrBuilder = (value: number) => {
  const pixels: number[] = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < value; i++) {
    pixels.push(i);
  }

  return pixels;
};

export { pixelsArrBuilder };
