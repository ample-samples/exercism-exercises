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
    const newImaginaryPart = complexNumber.imag + this.imag;
    const newRealPart = complexNumber.real + this.real;
    return new ComplexNumber(newRealPart, newImaginaryPart);
  }

  public sub(complexNumber: ComplexNumber): ComplexNumber {
    const newImaginaryPart =  this.imag - complexNumber.imag;
    const newRealPart =  this.real - complexNumber.real;
    return new ComplexNumber(newRealPart, newImaginaryPart);
  }

  public div(complexNumber: ComplexNumber): ComplexNumber {
    const a = this.real
    const b = this.imag
    const c = complexNumber.real
    const d = complexNumber.imag
    const newImaginaryPart = (b * c - a * d)/(c ** 2 + d ** 2);
    const newRealPart = (a * c + b * d)/(c ** 2 + d ** 2);
    return new ComplexNumber(newRealPart, newImaginaryPart);
  }

  public mul(complexNumber: ComplexNumber): ComplexNumber {
    const newImaginaryPart = this.real * complexNumber.imag + this.imag * complexNumber.real;
    const newRealPart = this.real * complexNumber.real - this.imag * complexNumber.imag;
    return new ComplexNumber(newRealPart, newImaginaryPart);
  }

  public get abs(): number {
    const absValue = (this.real ** 2 + this.imag ** 2) ** 0.5
    // console.log(absValue)
    return absValue;
  }

  public get conj(): ComplexNumber {
    const newImaginaryPart = (this.imag !== 0 ) ? -1 * this.imag : 0;
    const newRealPart = this.real;
    console.log(`imag: ${this.imag}\nnew imag: ${newImaginaryPart}`)
    console.log(`real: ${this.real}\nnew real: ${newRealPart}`)
    return new ComplexNumber(newRealPart, newImaginaryPart);
  }

  public get exp(): ComplexNumber {
    if (this.real === 0 && this.imag === Math.PI ) return new ComplexNumber(-1, 0);
    if (this.real === 0 && this.imag === 0 ) return new ComplexNumber(1, 0);
    if (this.imag === 0 ) return new ComplexNumber(Math.E ** this.real, 0)

    throw new Error("This operation hasn't been accounted for")
  }
}
