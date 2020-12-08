import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { cars } from '../model/Cars';
import { infos } from '../model/infos';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  Infos : infos=new infos();
  listUsers:infos[];
  c:cars=new cars();
  myForm : FormGroup;

 

  constructor(private ps:AppService ,private ac : ActivatedRoute) { }
  fileToUpload: File = null;
 

  ngOnInit(): void {this.myForm=new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    cin: new FormControl('',[Validators.required,Validators.pattern("[0-9]{8}")]),
    emailAdress : new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]*[.][a-zA-Z]*[@][a-zA-Z]*[.][a-zA-Z]*")]),
    gender: new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    confirmpassword : new FormControl('',Validators.required)
  })
    this.ac.paramMap.subscribe(next=>this.ps.getCarByIdJson(+next.get('id')).subscribe(res=>this.c=res));
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  Register(){
    this.ps.addUser(this.Infos,this.fileToUpload).subscribe(next=>this.ps.getUersJson().subscribe(res=>this.listUsers=res));
  }
  
get firstNameUser() {return this.myForm.get('firstName');}
get lastNameUser() {return this.myForm.get('lastName');}
get cinUser() {return this.myForm.get('cin');}
get emailAdressUser() {return this.myForm.get('emailAdress');}
get genderUser() {return this.myForm.get('gender');}
get passwordUser() {return this.myForm.get('password');}
get confirmpasswordUser() {return this.myForm.get('confirmpassword');}  


}
