const isValidOp: {[key: string]: boolean} = {
  "+": true,
  "-": true,
  "/": true,
  "*": true
};

const isTypeOperation = (s: string): boolean => {
  if (s === "plus" 
    || s === "minus"
    || s === "multiplied"
    || s === "divided") {
    return true;
  }
  return false;
};

const isTypeRemoveFromQuestion = (s: string): boolean => {
  return (s === "What" || s === "is") ? true : false;
};

const orderOpsLeftToRight = (equation: string[]): string[] => {
  const newEquation = [...equation]
  newEquation.splice(0, 0, "(");
  newEquation.splice(4, 0, ")");
  return newEquation;
};

const containsDoubleOps = (equation: string[]): boolean => {
  for (let i=0; i<equation.length; i++) {
    if (equation[i] === equation[i+1]) return true;
  }
  return false;
};

const hasInvalidOps = (equation: string[]): boolean => {
  for (let i=1; i<equation.length; i++) {
    const elementIsNumber = !isNaN(Number(equation[i]));
    if (!isValidOp[equation[i]] && !elementIsNumber) return true; 
  }
  return false;
};

export const answer = (question: string): number => {
  let questionWords: string[] = question
    .replace("?", "")
    .replaceAll("plus", "+")
    .replaceAll("minus", "-")
    .replaceAll("multiplied by", "*")
    .replaceAll("divided by", "/")
    .split(" ");

  if (`${questionWords[0]} ${questionWords[1]}` !== "What is") throw new Error('Unknown operation');

  // Clean list of words to remove "What is", etc.
  const cleanedQuestionWords: string[] = [];
  questionWords.forEach((element) => {
    if (isTypeRemoveFromQuestion(element)) {
      return;
    } else if (typeof Number(element) === "number") { 
      cleanedQuestionWords.push(element);
      return;
    } else if (isTypeOperation(element)) {
      cleanedQuestionWords.push(element);
      return;
    } else {
      throw new Error("Syntax error");
    }
  })

  if (containsDoubleOps(cleanedQuestionWords)) throw new Error("Syntax error");

  const fixedOrderOfOps = orderOpsLeftToRight(cleanedQuestionWords);
  try {
    return eval(fixedOrderOfOps.join(" "));
  } catch (error) {
    if (hasInvalidOps(cleanedQuestionWords)) throw new Error("Unknown operation");
    throw new Error("Syntax error");
  }
}
