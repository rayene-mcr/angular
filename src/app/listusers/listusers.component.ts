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
  msg:string;
  searchUser : infos[];
  tabUsers:infos[];
 
  
  

  constructor(private ps:AppService) { }
  

  ngOnInit(): void {
    this.ps.getUersJson().subscribe(res=>{this.searchUser=this.tabUsers=res});
  }
  
  search(query : any){
    this.searchUser = (query) ? this.tabUsers.filter(user=>user.firstName.toLowerCase().includes(query.toLowerCase())||user.lastName.toLowerCase().includes(query.toLowerCase())):this.tabUsers;
  }

 
  

  delete(i:infos){
    this.ps.deleteUser(i).subscribe(next=>this.ps.getUersJson().subscribe(res=>this.listUsers=res));
  }
 
  }


