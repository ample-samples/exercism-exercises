export const square = (squareNumber: number) => {
  // calculate the number of grains on a given square
    if (squareNumber < 1 || squareNumber > 64) {
      throw new Error('Invalid square number');
    }

    return BigInt(2) ** BigInt(squareNumber - 1);
  };

export const total = () => {
  // calculate the total number of grains
  let totalGrains  = 0n;

  for (let i = 1; i <= 64; i++) {
    totalGrains += square(i);
  }

  return totalGrains;
};
