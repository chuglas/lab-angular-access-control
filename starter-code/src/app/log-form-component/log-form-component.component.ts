import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/access.service';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {

  constructor(public log: AccessControlLog) { }

  ngOnInit() {
  }

  addThis(person,message) {
    this.log.addRegister(person, message);
  }

  showLogs() {
    var array = this.log.getRegisters();
    array.forEach(function(element) {
    console.log("Person : " + element.person);
    console.log("Message : " + element.message);
    console.log("Date : " + element.date);
 });

}
