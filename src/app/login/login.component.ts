import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../shared/app.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { infos } from '../model/infos';


declare var FB: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg;
  constructor(private ps:AppService , private routes:Router ,public toastr:ToastrManager) { }
  Infos:infos=new infos();

  ngOnInit(): void {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '218575919852429',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };
  
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }
  /*check(uname:string , p :string){
    var output = this.ps.checkusernameandpassword(uname,p);
    var otheroutput=this.ps.checkothernameandpassword(uname,p);
    if(output == true) {
      this.routes.navigate(['/welcome']);
    } else if (otheroutput ==true){
      this.routes.navigate(['/welcomeuser']);
    }
    else {
      this.msg='Invalid username or password'
    }
  }*/
  check(uname:string , p:string){
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
         this.msg='Veuillez vérifier vos informations'
        }
      }
    });
  }

  submitLogin(){
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response)=>
        {
          console.log('submitLogin',response);
          if (response.authResponse)
          {
            this.toastr.successToastr('login successful', 'Success!');
            this.routes.navigate(['/welcomeuser']);
          }
           else
           {
           this.toastr.errorToastr('Login failed','Oops');
         }
      });

  }
  signup(){
    this.routes.navigate(['/signup']);
  }

}
