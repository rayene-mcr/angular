import { Component, OnInit } from '@angular/core';
import { cars } from '../model/Cars';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-postuser',
  templateUrl: './postuser.component.html',
  styleUrls: ['./postuser.component.css']
})
export class PostuserComponent implements OnInit {

  listCars:cars[];
  Cars : cars = new cars();
  show:boolean =false;

  Carlst : cars []=[]; 
 
  

  constructor(private ps: AppService) { }
  fileToUpload: File = null;

  ngOnInit(): void {
    
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  
  AddCar(){
    console.log(this.Cars)
    this.ps.addCar(this.Cars,this.fileToUpload).subscribe(next=>this.ps.getCarsJson().subscribe(res=>this.listCars=res));
    this.show=true;
  }
  fullList(list:cars[]){
    this.Carlst=list;
      }

    
  IncrementQuantity(car:cars)
  { 
    car.quantity++;
    this.ps.updateCar(car.id,car).subscribe();
  }

  DiscrementQuaity(car:cars)
  {
    car.quantity--;
    this.ps.updateCar(car.id,car).subscribe();
  }


}
