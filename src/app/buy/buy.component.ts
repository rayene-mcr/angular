import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { buyer } from '../model/buyer';
import { cars } from '../model/Cars';
import { infos } from '../model/infos';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  

  
  Buyer : buyer=new buyer();
  listBuyers:buyer[];
  myForm: FormGroup;

  Infos : infos=new infos();
  listUsers:infos[];
  searchCar : cars[];
  c:cars=new cars();
 

 

  constructor(private ps:AppService ,private ac : ActivatedRoute ,private routes: Router,private toastr:ToastrManager) { }
  fileToUpload: File = null;


  ngOnInit(): void {this.myForm=new FormGroup({
    username : new FormControl('',Validators.required),
    carte : new FormControl('',Validators.required),
    cin: new FormControl('',[Validators.required,Validators.pattern("[0-9]{8}")]),
    emailAdress : new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]*[.][a-zA-Z]*[@][a-zA-Z]*[.][a-zA-Z]*")]),
    adresse : new FormControl('',Validators.required),
    ville : new FormControl('',Validators.required),
    travail : new FormControl('',Validators.required)
  })
    this.ac.paramMap.subscribe(next=>this.ps.getCarByIdJson(+next.get('id')).subscribe(res=>this.c=res));
  }

 
  Register(){
    this.ps.addBuyer(this.Buyer).subscribe(next=>this.ps.getBuyersJson().subscribe(res=>this.listBuyers=res));
    this.c.quantity--;
    this.ps.updateCar(this.c.id,this.c).subscribe(next=>this.ps.getCarsJson().subscribe(res=>this.searchCar=res));
    this.toastr.successToastr('Achat effectué avec succès', 'Félicitations !');
   
    
  }
  /*this.ps.addUser(this.Infos,this.fileToUpload).subscribe(next=>this.ps.getUersJson().subscribe(res=>this.listUsers=res));
  this.ps.updateCar(this.c.id,this.c).subscribe(next=>this.ps.getCarsJson().subscribe(res=>this.searchCar=res));
  this.routes.navigate(['/viewuser']);
  this.c.quantity--;*/
 
get usernameUser() {return this.myForm.get('username');}
get carteUser() {return this.myForm.get('carte');}
get cinUser() {return this.myForm.get('cin');}
get emailAdressUser() {return this.myForm.get('emailAdress');}
get adresseUser() {return this.myForm.get('adresse');}
get villeUser() {return this.myForm.get('ville');}
get travailUser() {return this.myForm.get('travail');}


}
