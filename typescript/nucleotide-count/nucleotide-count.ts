export function nucleotideCounts(nucleotides: string): { A: number; C: number; G: number; T: number } {
  const nucleotidesMap = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  }

  for (const nucleotide of nucleotides) {
    if (nucleotide === 'A' || nucleotide === 'C' || nucleotide === 'G' || nucleotide === 'T') {
      nucleotidesMap[nucleotide] += 1;
    } else {
      throw new Error('Invalid nucleotide in strand');
    }
  }

  return nucleotidesMap;
}
