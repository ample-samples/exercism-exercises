const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const robotNames: Set<string> = new Set([]);

const NAME_RE = /^[A-Z]{2}\d{3}$/


// create name
function createName(): string {
  let newName = "";
  let i = 1;
  while (i<=2) {
    newName +=  characters.charAt(Math.floor(Math.random() * characters.length));
    i++;
  }
  newName += Math.floor(Math.random() * 1000).toString().padStart(3, "0");

  return newName;
}
// add name to robot and name set
 function robotName(): string {
  let newName = createName();

  while (robotNames.has(newName)) {
    newName = createName();
  }

  robotNames.add(newName);
  return newName;
 }

export class Robot {
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

// let robot: Robot;
// robot = new Robot();
//
// const TOTAL_NUMBER_OF_NAMES =
//   26 * // A-Z
//   26 * // A-Z
//   10 * // 0-9
//   10 * // 0-9
//   10; // 0-9
//
// const usedNames = new Set();
// usedNames.add(robot.name);
//
// for (let i = 0; i < TOTAL_NUMBER_OF_NAMES - 1; i += 1) {
//   const sizeBefore = usedNames.size
//   const newRobot = new Robot()
//   usedNames.add(newRobot.name)
//   const sizeAfter = usedNames.size
//   if (sizeAfter === sizeBefore) {
//     console.log(`Weird name: ${newRobot.name} after ${usedNames.size} name generated. Is in set already? ${robotNames.has(newRobot.name)}`)
//   }
//   // console.log(usedNames.size, `Loop ittr ${i}`)
// }
//
// console.log(`You created ${usedNames.size}/${TOTAL_NUMBER_OF_NAMES} names.`)

