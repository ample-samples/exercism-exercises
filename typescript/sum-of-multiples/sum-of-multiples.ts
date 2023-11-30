export function sum(items: number[], level: number): number {
  let itemSum = 0;
  const uniqueMultiples: Set<number> = new Set();
  for (const item of items) {
    if ( item === 0 ) continue;
    let n = 1;
    let multiple = item;
    while ( multiple < level ) {
      uniqueMultiples.add(multiple);
      multiple = n * item;
      n++;
    }
  }

  uniqueMultiples.forEach((item) => {
    itemSum += item;
  });

   return itemSum;
}
