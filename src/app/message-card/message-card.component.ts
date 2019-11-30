import { Component, OnInit, Input } from '@angular/core';
import { Message, Type } from '../models/message.model';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['../../styles/card.css']
})
export class MessageCardComponent implements OnInit {
  
  @Input('message') message: Message;

  announcement_icon = "notifications";
  warning_icon = "priority_high";

  message_icon: string;
  message_style: string;

  constructor() {
  }
  getIcon(){
    return this.message_icon;
  }
  getIconClass(){
    return this.message_style;
  }
  ngOnInit() {
    if(this.message.type == Type.Warning){
      this.message_icon = this.warning_icon;
      this.message_style = "warning";
    }
    else{
      this.message_icon = this.announcement_icon;
      this.message_style = "announcement";
    }
  }

}
