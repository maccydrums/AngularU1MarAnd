import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: string[] = ['Knatte', 'Fnatte', 'Tjatte'];

  constructor() { }

  ngOnInit() {
  }

  newUser(user){
    this.users.push(user);
  }

  removeUsername(user) {
    this.users.pop();
  }

}
