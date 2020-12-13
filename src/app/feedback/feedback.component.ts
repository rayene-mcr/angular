import { Component, OnInit } from '@angular/core';
import { infos } from '../model/infos';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private ps:AppService) { }
  mails:infos=new infos();
  listMails:infos[];

  ngOnInit(): void {
    this.ps.getMailsJson().subscribe(res=>this.listMails=res);
  }

}
