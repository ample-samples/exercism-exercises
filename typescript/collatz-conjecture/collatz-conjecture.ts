export function steps(count: number): number {
  if (count - Math.floor(count) !== 0 || count <= 0) {
    throw new Error("Only positive integers are allowed")
  }

  let stepCount = 0;
  let workingNum = count;

  while (workingNum > 1) {
    stepCount++;
    if (workingNum % 2 === 0) {
      workingNum = workingNum / 2;
    } else {
      workingNum = 3 * workingNum + 1;
    }
  }

   return stepCount;
}
