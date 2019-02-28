import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() user: string;
  @Input() textColor: boolean;

  //state: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.textColor = !this.textColor;
  }

}
