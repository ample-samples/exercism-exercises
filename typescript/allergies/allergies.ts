const allergiesLookup: { [key: string]: string } = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats',
}

export class Allergies {
  allergenIndex: string;
  constructor(allergenIndex: number) {
    this.allergenIndex = allergenIndex
      .toString(2)
      .padStart(8, '0')
      .slice(-8)
      .split('').reverse().join('');
    console.log(this.allergenIndex);
  }

  public list(): string[] {
    const allergies = [];
    for (let i = 0; i < this.allergenIndex.length; i++) {
      if (this.allergenIndex[i] === '1') {
        allergies.push(allergiesLookup[2 ** Number(i)]);
      }
    }
    return allergies;
  }

  public allergicTo(allergen: string): boolean {
    if (Number(this.allergenIndex) === 0) return false;

    for (let i=0; i<this.allergenIndex.length; i++) {
      if (this.allergenIndex[i] === '1' 
        && allergen === allergiesLookup[2 ** Number(i)]) {
          return true;
      }
    }

    return false;
  }
}
