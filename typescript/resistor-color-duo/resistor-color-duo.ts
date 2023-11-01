export function decodedValue(colors: string[]): number {
  const color1 = colorLookup[colors[0]];
  const color2 = colorLookup[colors[1]];
  console.log(color1, color2)

  return color1 * 10 + color2;
}

// type ColorLookup = {[key: string]: number}

const colorLookup: any = {
  "black": 0,
  "brown": 1,
  "red": 2,
  "orange": 3,
  "yellow": 4,
  "green": 5,
  "blue": 6,
  "violet": 7,
  "grey": 8,
  "white": 9
}
