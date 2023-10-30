const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const robotNames: Set<string> = new Set([]);

function createName(): string {
  let newName = "";
  for (let i=0; i<2; i++) {
    newName +=  characters.charAt(Math.floor(Math.random() * 26));
  }
  newName += Math.floor(Math.random() * 1000).toString().padStart(3, "0");

  return newName;
}

function robotName(): string {
  let newName = createName();

  while (robotNames.has(newName)) {
    newName = createName();
  }

  robotNames.add(newName);
  return newName;
}

class Robot {
  robotName: string;

  constructor() {
   this.robotName = robotName(); 
  }

  public get name(): string {
    return this.robotName;
  }

  public resetName(): void {
    this.robotName = robotName(); 
  }

  public static releaseNames(): void {
    robotNames.clear();
  }
}

let startTime = performance.now();

const TOTAL_NUMBER_OF_NAMES =
  26 * // A-Z
  26 * // A-Z
  10 * // 0-9
  10 * // 0-9
  10; // 0-9

const usedNames = new Set();

for (let i = 0; i < TOTAL_NUMBER_OF_NAMES; i += 1) {
  const newRobot = new Robot()
  usedNames.add(newRobot.name)
}

let endTime = performance.now();
let timeElapsed = endTime - startTime;
console.log(`That took ${Math.floor(timeElapsed)}ms`)

console.log(`You created ${usedNames.size}/${TOTAL_NUMBER_OF_NAMES} names.`)
