export class Rational {
  numerator: number;
  denominator: number;
  constructor(n: number, d: number) {
    this.numerator = n;
    this.denominator = d;
  }

  add(rationalNumber: Rational) {
    if (this.numerator * rationalNumber.denominator 
      + rationalNumber.numerator * this.denominator === 0) 
    {
      return new Rational(0,1);
    }

    return new Rational(
      this.numerator * rationalNumber.denominator +
        rationalNumber.numerator * this.denominator,
      this.denominator * rationalNumber.denominator
    );
  }

  sub(rationalNumber: Rational) {
    if (this.numerator * rationalNumber.denominator 
      - rationalNumber.numerator * this.denominator === 0) {
      return new Rational(0,1)
    }

    return new Rational(
      this.numerator * rationalNumber.denominator -
        rationalNumber.numerator * this.denominator,
      this.denominator * rationalNumber.denominator
    );
  }

  mul(rationalNumber: Rational) {
    return new Rational(
      this.numerator * rationalNumber.numerator,
      this.denominator * rationalNumber.denominator
    ).reduce();
  }

  div(rationalNumber: Rational) {
    const newNumerator = this.numerator * rationalNumber.denominator;
    const newDenominator = this.denominator * rationalNumber.numerator;
    if (newDenominator < 0) {
      return new Rational(-1 * newNumerator, -1 * newDenominator).reduce();
    } else {
      return new Rational(newNumerator, newDenominator).reduce();
    }
  }

  abs() {
    return new Rational(
      Math.abs(this.numerator),
      Math.abs(this.denominator)
    ).reduce();
  }

  exprational(exponent: number) {

    if (exponent < 0) {
      const newDenominator = this.numerator** (-1 * exponent);
      const newNumerator = this.denominator ** (-1 * exponent);
      if (newDenominator < 0) {
        return new Rational(-1 * newNumerator, -1 * newDenominator).reduce();
      } else {
        return new Rational(newNumerator, newDenominator).reduce();
      }
    } else {
      const newNumerator = this.numerator** exponent;
      const newDenominator = this.denominator ** exponent;
      if (newDenominator < 0) {
        return new Rational(-1 * newNumerator, -1 * newDenominator).reduce();
      } else {
        return new Rational(newNumerator, newDenominator).reduce();
      }
    }
  }

  expreal(base: number) {
    const realNumber = this.numerator / this.denominator;
    return base ** realNumber;
  }

  reduce() {
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const gcdValue = gcd(Math.abs(this.numerator), Math.abs(this.denominator));
    const newNumerator = this.numerator / gcdValue;
    const newDenominator = this.denominator / gcdValue;
    if (newDenominator < 0) {
      return new Rational(-1 * newNumerator, -1 * newDenominator);
    } else {
      return new Rational(newNumerator, newDenominator);
    }
  }
}
