export function find(haystack: number[], needle: number): number | never | undefined {
  if ( haystack.length === 0
    || needle < haystack[0]
    || needle > haystack[haystack.length - 1]) {
    throw new Error('Value not in array');
  }
  let foundItem;
  let leftPointer = 0;
  let rightPointer = haystack.length - 1;
  let searchIndex;
  let lastSearchIndex;

  while (!foundItem) {
    lastSearchIndex = searchIndex
    searchIndex = Math.floor((leftPointer + rightPointer) / 2)
    if (lastSearchIndex === searchIndex)  throw new Error('Value not in array') 
    if (needle === haystack[searchIndex]) {
      foundItem = true;
      return searchIndex
    } 

    if (needle > haystack[searchIndex]) {
      leftPointer = 1 + searchIndex;
      continue;
    } else {
      rightPointer = searchIndex - 1;
      continue;
    }
  }
}
