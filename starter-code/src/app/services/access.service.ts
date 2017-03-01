import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {

    logMessages: Array<Object> = [];

    constructor() { }

    addRegister(person:string, message:string) {
      console.log("Before: ", this.logMessages);
      var date = new Date();
      var newPerson = {person, message, date}
      this.logMessages.push(newPerson);

    }

    getRegisters() {
      return this.logMessages;
    }
}
