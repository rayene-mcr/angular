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

  resu(){
    this.ps.getBuyersJson
  }
  

  delete(i:infos){
    this.ps.deleteUser(i).subscribe(next=>this.ps.getUersJson().subscribe(res=>this.listUsers=res));
  }
  chbih(){
    this.ps.getBuyersJson().subscribe(res=>{
      for (let i in res){
        if ( localStorage.getItem('username') == res[i].username){
          this.msg='cheri'
        }
        else {
          this.msg='mouch cheri'
        }
      }
    });

  }

  /*check(uname:string , p:string){
    this.ps.getUersJson().subscribe(res=>{
      for (let i in res){
        if (uname ==res[i].username && p ==res[i].password && res[i].role=="admin"){
          this.toastr.successToastr('login successful', 'Success!');
          localStorage.setItem('role',res[i].role);
          this.routes.navigate(['/welcome']);
        }
        else if(uname ==res[i].username && p==res[i].password && res[i].role=="user"){
          this.toastr.successToastr('login successful', 'Success!');
          this.routes.navigate(['/welcomeuser']);

        }
        else if(uname != res[i].firstName && p != res[i].password ){
          this.toastr.errorToastr('Login failed','Oops');
        }
      }
    });*/
  }


