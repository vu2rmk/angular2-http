import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './shared/models/user';

import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
})
export class AppComponent implements OnInit{

  users: User[];

  constructor(private service: UserService){  }

  ngOnInit(){

    //grab users
    // this.http.get('https://reqres.in/api/users')
    //   .subscribe(data => {

    //       console.log(data.json());

    //       this.users = data.json().data;
    //   });

    // this.http.get('https://reqres.in/api/users')
    //   .map(res => res.json().data)
    //   .subscribe(users => this.users = users);

    this.service.getUsers()
      .subscribe(users => this.users = users);
  }

}
