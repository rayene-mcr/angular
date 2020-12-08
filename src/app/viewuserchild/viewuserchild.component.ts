import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cars } from '../model/Cars';

@Component({
  selector: 'app-viewuserchild',
  templateUrl: './viewuserchild.component.html',
  styleUrls: ['./viewuserchild.component.css']
})
export class ViewuserchildComponent implements OnInit {

  @Input() Cars : cars = new cars();
  @Input() show:boolean;
  @Output() increment=new EventEmitter<cars>();
  @Output() discrement=new EventEmitter<cars>();


  constructor() { }

  ngOnInit(): void {
  }

  sendNotifIncrement(){
    this.increment.emit(this.Cars);
  }

  sendNotifDisrement(){
    this.discrement.emit(this.Cars);
  }

}
