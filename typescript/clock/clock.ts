export class Clock {
  minute;
  hour;

  constructor(hour: number, minute?: number) {
    let minuteOverflowHrs = 0;
    this.minute = 0;
    if (minute) {
      this.minute = minute % 60;
      minuteOverflowHrs = Math.floor(minute / 60);
    }

    while (this.minute < 0) {
      this.minute += 60
    }

    this.hour = (hour + minuteOverflowHrs) % 24;

    while (this.hour < 0) {
      this.hour += 24
    }
  }

  public toString(): string {
    return `${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}`
  }

  public plus(minutes: number): Clock {
    this.minute += minutes % 60;
    let minuteOverflowHrs = Math.floor(minutes / 60);

    while (this.minute < 0)  this.minute += 60; 

    while (this.minute >= 60) {
      this.minute -= 60;
      this.hour += 1;
    }

    this.hour += minuteOverflowHrs % 24;

    while (this.hour < 0)  this.hour += 24;  

    while (this.hour >= 24) this.hour -= 24; 

    return this;
  }

  public minus(minutes: number): Clock {
    this.minute -= minutes % 60;
    let minuteOverflowHrs = Math.floor(minutes / 60);

    while (this.minute < 0) {
      this.minute += 60;
      this.hour -= 1;
    }

    while (this.minute >= 60) {
      this.minute -= 60;
      this.hour += 1;
    }

    this.hour -= minuteOverflowHrs % 24;

    while (this.hour < 0)  this.hour += 24;  

    while (this.hour >= 24)  this.hour -= 24;  

    return this;
  }

  public equals(other: Clock): boolean {
    return (new Clock(other.hour, other.minute).toString() === this.toString());
  }
}
