const factors = (number: number) => Array
    .from(Array(number + 1), (_, i) => i)
    .filter(i => number % i === 0)

type Classification = 'perfect' | 'abundant' | 'deficient';

export function classify(n: number): Classification {
  if (n <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  const factorsN = factors(n);

  let sum = 0;
  for (let i = 0; i < factorsN.length -1; i++) {
    sum += factorsN[i];
  }

  if (sum === n) {
    return 'perfect';
  } else if (sum > n) {
    return 'abundant';
  } else {
    return 'deficient';
  }
}
