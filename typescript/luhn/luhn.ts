export function valid(digitString: string): boolean {
  console.log(`\n=== Start Validity Check For ${digitString}===\n`)
  const cleanedDigitString = digitString.replace(/ /g, '');
  if (cleanedDigitString.length <= 1) return false;

  if (!cleanedDigitString.match(/^[0-9]*$/)) return false;

  const digitList: number[] = cleanedDigitString.split('').map(element => {
    return Number(element);
  })

  return lunh(digitList);
}

function lunh(digitList: number[]): boolean {
  for (let i = digitList.length-2; i >= 0; i-=2) {
    const element = digitList[i];
    digitList[i] = element < 5 ? element * 2 : element * 2 - 9;
  }

  let digitSum = 0;
  for (const element of digitList) digitSum += element;

  return digitSum % 10 === 0 ? true : false;
}
