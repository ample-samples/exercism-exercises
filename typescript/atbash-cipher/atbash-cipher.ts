const decodeToEncode: { [key: string]: string } = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0", a: 'z', b: 'y', c: 'x', d: 'w', e: 'v', f: 'u', g: 't', h: 's', i: 'r', j: 'q', k: 'p', l: 'o', m: 'n', n: 'm', o: 'l', p: 'k', q: 'j', r: 'i', s: 'h', t: 'g', u: 'f', v: 'e', w: 'd', x: 'c', y: 'b', z: 'a' }

export function encode(plainText: string): string {
  let encodedPlainText = "";
  for (let i = 0; i < plainText.length; i++) {
    const workingChar = plainText[i].toLowerCase()
    if (decodeToEncode[workingChar]) {
      encodedPlainText += decodeToEncode[workingChar];
    }
  }

  let encodedAndFormattedPlainText = "";
  for (let i = 0; i < encodedPlainText.length; i++) {
    if (i % 5 === 0 && i !== 0) encodedAndFormattedPlainText += " ";
    encodedAndFormattedPlainText += encodedPlainText[i];
  }
  return encodedAndFormattedPlainText;
}

export function decode(cipherText: string): string {
  return encode(cipherText).replaceAll(" ", "");
}
