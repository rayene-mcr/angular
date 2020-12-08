import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cars } from '../model/Cars';
import { AppService } from '../shared/app.service';



@Component({
  selector: 'app-updatecar',
  templateUrl: './updatecar.component.html',
  styleUrls: ['./updatecar.component.css']
})
export class UpdatecarComponent implements OnInit {

  
  c:cars=new cars();

  constructor(private ps:AppService , private ac:ActivatedRoute ,private router : Router) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(next=>this.ps.getCarByIdJson(+next.get('id')).subscribe(res=>this.c=res));

  }
  

  UpdateCar(){
    this.ps.updateCar(this.c.id,this.c).subscribe(res=>this.router.navigateByUrl("/view"));
  }

}
