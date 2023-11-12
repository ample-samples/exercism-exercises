export class SimpleCipher {

  private props: {
    key: string
  };

  constructor(text?: string) {
    this.props = {
      key: text ?? makeid(100)
    };
  }

  public get key(): string {
    return this.props.key;
  }

  encode(plainText: string): string {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let encodedString = '';
    for (let i = 0; i < plainText.length; i++) {
      const workingChar = plainText[i];
      const charLocation = characters.indexOf(workingChar);
      const shiftDistance = characters.indexOf(this.key[i % this.key.length]);
      const newChar = characters[(charLocation + shiftDistance) % characters.length];
      encodedString += newChar;
    }

    return encodedString;
  }

  decode(code: string): string {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let decodedString = '';
    for (let i = 0; i < code.length; i++) {
      const workingChar = code[i];
      const charLocation = characters.indexOf(workingChar);
      const shiftDistance = characters.indexOf(this.key[i % this.key.length]);
      let shiftDisplacement = charLocation - shiftDistance;
      while (shiftDisplacement < 0 ) shiftDisplacement += characters.length;

      const newChar = characters[(shiftDisplacement) % characters.length];
      decodedString += newChar;
    }

    return decodedString;
  }
}

function makeid(length: number):string {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
