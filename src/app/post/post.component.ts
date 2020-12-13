import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { cars } from '../model/Cars';
import { AppService } from '../shared/app.service';





@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 
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
   
    this.ps.updateCar(car.quantity,car).subscribe();
  }

  DiscrementQuaity(car:cars)
  {
  
    this.ps.updateCar(car.quantity,car).subscribe();
  }


  }
  


