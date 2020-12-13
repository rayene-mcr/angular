import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { cars } from '../model/Cars';
import { infos } from '../model/infos';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Infos : infos=new infos();
  listUsers:infos[];
  searchCar : cars[];
  c:cars=new cars();
  myForm : FormGroup;

 

  constructor(private ps:AppService ,private ac : ActivatedRoute ,private routes: Router,public toastr:ToastrManager) { }
  fileToUpload: File = null;
 

  ngOnInit(): void {this.myForm=new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    username : new FormControl('',Validators.required),
    cin: new FormControl('',[Validators.required,Validators.pattern("[0-9]{8}")]),
    emailAdress : new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]*[.][a-zA-Z]*[@][a-zA-Z]*[.][a-zA-Z]*")]),
    password : new FormControl('',Validators.required),
    confirmpassword : new FormControl('',Validators.required),
    role : new FormControl('',Validators.required)
  })
    this.ac.paramMap.subscribe(next=>this.ps.getCarByIdJson(+next.get('id')).subscribe(res=>this.c=res));
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  save(){
    this.ps.addUser(this.Infos,this.fileToUpload).subscribe(next=>this.ps.getUersJson().subscribe(res=>
    this.listUsers=res));
   
    this.toastr.successToastr('Compte ajouté','Félicitations')
    this.routes.navigate(['/login']);


    
  }
  
get firstNameUser() {return this.myForm.get('firstName');}
get lastNameUser() {return this.myForm.get('lastName');}
get userNameUser() {return this.myForm.get('username');}
get cinUser() {return this.myForm.get('cin');}
get emailAdressUser() {return this.myForm.get('emailAdress');}
get genderUser() {return this.myForm.get('gender');}
get passwordUser() {return this.myForm.get('password');}
get confirmpasswordUser() {return this.myForm.get('confirmpassword');}  
get roleUser() {return this.myForm.get('role');}

}
