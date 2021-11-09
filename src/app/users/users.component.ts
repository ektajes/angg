import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private ser:UserService) { }
dataa:any;
  ngOnInit(): void {
    this.getdataa();
  }

  getdataa(){
this.ser.getdata().subscribe(dataa=>{
this.dataa=dataa;
})
  }

}
