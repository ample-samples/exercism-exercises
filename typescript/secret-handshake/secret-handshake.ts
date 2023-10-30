type Actions = string[]

const actions: Actions = [
  "jump",
  "close your eyes",
  "double blink",
  "wink"
]

export function commands(codeDec: Number): Actions {
  let codeBin = codeDec.toString(2).padStart(5, "0");

  const codeCommands = codeBin.split("").map((el) => Number(el))
  
  const reverseOrder = Boolean(codeCommands.shift())

  const handshake: Actions = []
  for (let i=0; i<codeCommands.length; i++) {
    if (codeCommands[i]) handshake.push(actions[i])
  }

  if (!reverseOrder) {
    return handshake.reverse()
  }

  return handshake
}
