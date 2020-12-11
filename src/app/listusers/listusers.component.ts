import { Component, OnInit } from '@angular/core';
import { infos } from '../model/infos';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  Infos : infos=new infos();
  listUsers:infos[];

  constructor(private ps:AppService) { }

  ngOnInit(): void {
    this.ps.getUersJson().subscribe(res=>this.listUsers=res);
  }

  /*delete(c:cars){
    this.ps.deleteCar(c).subscribe(next=>this.ps.getCarsJson().subscribe(res=>this.searchCar=res));
  }*/

  delete(i:infos){
    this.ps.deleteUser(i).subscribe(next=>this.ps.getUersJson().subscribe(res=>this.listUsers=res));
  }

}
