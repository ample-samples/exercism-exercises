type operation = "plus" | "minus" | "divided" | "multiplied";
type removeFromQuestion = "What" | "is";

const isTypeOperation = (s: string): boolean => {
  if (s === "plus" 
    || s === "minus"
    || s === "multiplied"
    || s === "divided") {
    return true;
  }
  return false;
}

const isTypeRemoveFromQuestion = (s: string): boolean => {
  if (s === "What" || s === "is") {
    return true;
  }
  return false;
}


export const answer = (question: string): number => {
  let questionWords: string[] = question
    .replace("?", "")
    .replaceAll("plus", "+")
    .replaceAll("minus", "-")
    .replaceAll("multiplied by", "*")
    .replaceAll("divided by", "/")
    .split(" ")

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
      console.log(`Element causes error ${element}`)
      throw new Error("Syntax error")
    }
  })
  console.log(`Cleaned words: ${cleanedQuestionWords.join(" ")} length: ${cleanedQuestionWords.length}`)
  try {
    return eval(cleanedQuestionWords.join(" "))
  } catch (error) {
    throw new Error("Syntax error")
  }
}
