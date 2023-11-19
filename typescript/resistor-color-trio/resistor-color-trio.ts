const ohmColors = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
}

type Color = keyof typeof ohmColors;


export function decodedResistorValue(colors: Color[]): string {
  const ohmValues = colors.map((color) => ohmColors[color]);
  const ohms = (10 * ohmValues[0] + ohmValues[1]) * 10 ** ohmValues[2];

  if ( ohms < 1000 ) {
    return `${ohms} ohms`
  } else if ( ohms < 1000000 ) {
    return `${ohms / 1000} kiloohms`
  } else if ( ohms < 1000000000 ) {
    return `${ohms / 1000000} megaohms`
  } else {
    return `${ohms / 1000000000} gigaohms`
  }
}
