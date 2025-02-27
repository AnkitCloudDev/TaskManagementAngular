import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { NgForOf } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
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
