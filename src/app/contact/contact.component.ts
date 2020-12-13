import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { infos } from '../model/infos';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  Infos : infos=new infos();
  listUsers:infos[];

  constructor(private ps :AppService ,public toastr :ToastrManager) { }

  ngOnInit(): void {
  }

  send(){
    this.ps.addMail(this.Infos).subscribe(next=>this.ps.getMailsJson().subscribe(res=>this.listUsers=res));
    this.toastr.successToastr('Message envoyé avec succès','Félicitations');
  }

}
