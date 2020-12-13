import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { infos } from '../model/infos';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  i:infos=new infos();

  constructor(private ac:ActivatedRoute,private ps:AppService) { }

  ngOnInit(): void {
this.ac.paramMap.subscribe(next=>this.ps.getUsersByIdJson(+localStorage.getId('id').subscribe(next=>this.i=next)));
  }
  

}
