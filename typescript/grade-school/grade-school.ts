interface Roster {
   [key: number]: string[];
}

export class GradeSchool {
  private gradeList: Roster;

  constructor() {
    this.gradeList = {};
  }

  roster(): Roster {
    let returnRoster: Roster = {};
    for ( const grade in this.gradeList) {
      returnRoster[grade] = [...this.gradeList[grade]].sort();
    }
    return returnRoster;
  }

  add(studentName: string, grade: number): void {
    this.removeStudent(studentName)

    if (this.gradeList[grade] === undefined) {
      this.gradeList[grade] = [studentName];
    } else {
      this.gradeList[grade] = [...this.gradeList[grade], ...[studentName]];
    }
  }

  private removeStudent(studentName: string): void {
    for (const grade in this.gradeList) {
      const studentIndex = this.gradeList[grade].indexOf(studentName);
      if (studentIndex > -1) this.gradeList[grade].splice(studentIndex, 1)
    }
  }

  grade(grade: number): string[] {
    const roster = Object.assign({}, this.roster());
    return roster[grade] ? [...roster[grade]].sort() : []; 
  }
}
