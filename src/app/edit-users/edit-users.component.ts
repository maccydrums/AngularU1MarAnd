import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  value:string = '';

  @Output() newName = new EventEmitter<string>();
  @Output() removeName = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  removeUser() {
    this.removeName.emit();
  }

  addUser() {
    this.newName.emit(this.value);
  }

}
