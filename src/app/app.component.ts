import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';

import { NgForOf } from '@angular/common';
import { UserComponent } from './component/user/user.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { DUMMY_USERS } from './component/user/dummy-users';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, NgForOf, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = '';
  onSelectUser(id:string){
    console.log("Selected User with Id " + id);
    this.selectedUserId = id;
  }

  get selectedUser(){
    return this.users.find((user)=> user.id===this.selectedUserId);
  }

}
