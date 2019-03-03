import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //The array with our users
  users: string[] = ['Knatte', 'Fnatte', 'Tjatte'];

  constructor() { }

  ngOnInit() {
  }

  //adding a new user to our array with parameters/data from edit-users (@Output() newName = new EventEmitter<string>();)
  newUser(user){
    this.users.push(user);
  }

  //removes the last user from our array with ---.--- ^
  removeUsername(user) {
    this.users.pop();
  }

}
