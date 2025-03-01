import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import './dummy-tasks';
import { dummyTasks } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from '../../model/newTask.model';
type Task = {
  id: string,
  title: string,
  dueDate: string,
  summary: string
}
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required: true}) name!: string;
@Input({required: true}) id!: string;
@Output() addTask = new EventEmitter<string>();
isAddTask: boolean = false;
tasks= dummyTasks;
get selectedUserTasks(){
  return this.tasks.filter((task)=> task.userId===this.id)
}
onComplete(id: string){
  this.tasks=this.tasks.filter((task)=> task.id!==id);
}
onAddTask(){
  // this.addTask.emit(this.id);
  this.isAddTask = true;
}
onCancel(){

  this.isAddTask = false;
}
onSubmit(taskData: NewTask){
  this.tasks.push({id: (this.tasks.length + 1).toString(), title: taskData.title, dueDate: taskData.dueDate, summary: taskData.summary, userId: this.id});
  this.isAddTask = false;
}
}
