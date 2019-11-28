import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Message, Type } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class TestingDataService {
  sampleCourse: Course;
  sampleAnnouncement: Message;
  sampleWarning: Message;

  random_name = require('node-random-name');
  random_number = require('random-number-in-range');

  constructor() {
    this.initCourse();
  }
  public getSampleCourse(){
    return this.sampleCourse;
  }
  public getSampleAnnouncement(){
    return this.sampleAnnouncement;
  }
  public getSampleWarning(){
    return this.sampleWarning;
  }
  public getDays(course: Course){
    return course.days.join(" ");
  }
  public getTimes(course: Course){
    return course.times.join(" - ");
  }
  private initCourse(){
    this.sampleCourse = {
      code: "COMP 585",
      name: "Graphical User Interface Design",
      professor: "Prof. " + this.getNewLastName(),
      section: this.random_number(10000, 99999),
      room: "JD 2100",
      days: [
        "Mo",
        "We",
        "Fri"
      ],
      times: [
        "8:00a",
        "9:30a"
      ]
    };
  }
  public getNewFirstName(){
    return this.random_name({first: true});
  }
  public getNewLastName(){
    return this.random_name({last: true});
  }
  public getNewMessage(messageType: Type){
    var firstName = this.getNewFirstName();
    var lastName = this.getNewLastName();
    var newMessage: Message = {
      recipientName: firstName + " " + lastName, 
      recipientAddress: lastName.toLowerCase() + "." + firstName.toLowerCase() + "." +
                        this.random_number(100, 999) +"@my.csun.edu",
      content: "An exam is scheduled for our next class session. Please be sure to bring all necessary materials.",
      timestamp: new Date(),
      type: messageType
    }
    return newMessage;
  }
}
