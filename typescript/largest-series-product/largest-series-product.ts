export function largestProduct(sequence: string, windowSize: number) {
  console.log(sequence)
  if (windowSize > sequence.length) {
    throw new Error('Span must be smaller than string length')
  }
  if (sequence.match(/[^0-9]/g)) {
    throw new Error('Digits input must only contain digits')
  }
  if (windowSize < 0) {
    throw new Error('Span must not be negative')
  }

  let largestProduct = 0;
  for (let i = 0; i <= sequence.length - windowSize; i++) {
    let product = 1;
    for (let j = i; j < i + windowSize; j++) {
      product *= Number(sequence[j])
    }
    if (product > largestProduct) {
      largestProduct = product
    }
  }
  return largestProduct;
}
