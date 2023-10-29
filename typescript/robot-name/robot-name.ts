const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const robotNames: string[] = []

function generateName(): string {
  let newName = ""
  let i = 1
  while (i<=2) {
    newName +=  characters.charAt(Math.floor(Math.random() * characters.length))
    i++
  }
  newName += Math.floor(Math.random() * 1000).toString().padStart(3, "0");

  if (robotNames.includes(newName)) {
    newName = generateName()
  }

  robotNames.push(newName)
  return newName
}

generateName()

export class Robot {
  robotName: string;

  constructor() {
   this.robotName = generateName(); 
  }

  public get name(): string {
    return this.robotName
  }

  public resetName(): void {
    this.robotName = generateName(); 
  }

  public static releaseNames(): void {
    robotNames.length = 0
  }
}
