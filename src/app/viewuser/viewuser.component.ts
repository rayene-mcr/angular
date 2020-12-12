import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { cars } from '../model/Cars';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  @Output() newlist=new EventEmitter<cars[]>();
fileToUpload: File = null;
  
listCars:cars[];
  tabcars : cars[];
  searchCar : cars[];
  Cars : cars = new cars();

  constructor(private ps:AppService) { }

  ngOnInit(): void {
    this.ps.getCarsJson().subscribe(res=>{this.searchCar=this.tabcars=res})
  }

  search(query : any){
    this.searchCar = (query) ? this.tabcars.filter(car=>car.name.toLowerCase().includes(query.toLowerCase()) ||car.puissance.toString().toLowerCase().includes(query.toLowerCase())||car.city.toLowerCase().includes(query.toLowerCase()) ) : this.tabcars;
  }
  


}
