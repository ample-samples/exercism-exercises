interface complexNum {
  imaginary: number,
  real: number
}

export class ComplexNumber {
  complex: complexNum;
  constructor(real: number, imaginary: number) {
    this.complex = {imaginary, real};
  }

  public get real(): number {
    return this.complex.real;
  }

  public get imag(): number {
    return this.complex.imaginary;
  }

  public add(complexNumber: ComplexNumber): ComplexNumber {
    const newImaginaryPart = complexNumber.complex.imaginary + this.complex.imaginary;
    const newRealPart = complexNumber.complex.real + this.complex.real;
    return new ComplexNumber(newRealPart, newImaginaryPart);
  }

  public sub(complexNumber: ComplexNumber): ComplexNumber {
    const newImaginaryPart =  this.complex.imaginary - complexNumber.complex.imaginary;
    const newRealPart =  this.complex.real - complexNumber.complex.real;
    return new ComplexNumber(newRealPart, newImaginaryPart);
  }

  // a = this.complex.real
  // b = this.complex.imaginary
  // c = complexNumber.complex.real
  // d = complexNumber.complex.imaginary

  public div(complexNumber: ComplexNumber): ComplexNumber {
    const a = this.complex.real
    const b = this.complex.imaginary
    const c = complexNumber.complex.real
    const d = complexNumber.complex.imaginary
    const newImaginaryPart = (b * c - a * d)/(c ** 2 + d ** 2);
    const newRealPart = (a * c + b * d)/(c ** 2 + d ** 2);
    return new ComplexNumber(newRealPart, newImaginaryPart);
  }

  public mul(complexNumber: ComplexNumber): ComplexNumber {
    const newImaginaryPart = this.complex.real * complexNumber.complex.imaginary + this.complex.imaginary * complexNumber.complex.real;
    const newRealPart = this.complex.real * complexNumber.complex.real - this.complex.imaginary * complexNumber.complex.imaginary;
    return new ComplexNumber(newRealPart, newImaginaryPart);
  }

  public get abs(): number {
    const absValue = (this.complex.real ** 2 + this.complex.imaginary ** 2) ** 0.5
    // console.log(absValue)
    return absValue;
  }

  public get conj(): ComplexNumber {
    const newImaginaryPart = (this.complex.imaginary !== 0 ) ? -1 * this.complex.imaginary : 0;
    const newRealPart = this.complex.real;
    console.log(`imag: ${this.complex.imaginary}\nnew imag: ${newImaginaryPart}`)
    console.log(`real: ${this.complex.real}\nnew real: ${newRealPart}`)
    return new ComplexNumber(newRealPart, newImaginaryPart);
  }

  public get exp(): ComplexNumber {
    if (this.real === 0 && this.imag === Math.PI ) return new ComplexNumber(-1, 0);
    if (this.real === 0 && this.imag === 0 ) return new ComplexNumber(1, 0);
    if (this.imag === 0 ) return new ComplexNumber(Math.E ** this.real, 0)

    throw new Error("This operation hasn't been accounted for")
  }
}
