import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { cars } from '../model/Cars';
import { AppService } from '../shared/app.service';




@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
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

  block = { 'display' : 'block'};
  none = { 'display' : 'none'}; 

  search(query : any){
    this.searchCar = (query) ? this.tabcars.filter(car=>car.name.toLowerCase().includes(query.toLowerCase()) ||car.puissance.toLowerCase().includes(query.toLowerCase())) : this.tabcars;
  }
  delete(c:cars){
    this.ps.deleteCar(c).subscribe(next=>this.ps.getCarsJson().subscribe(res=>this.searchCar=res));
  }

  updateCar(list:cars[]){
    this.listCars=list;
      }
      
      buyCar(Cars:cars){
        Cars.quantity--;
        this.ps.updateCar(Cars.id,Cars).subscribe();
      }

}
