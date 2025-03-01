import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../../model/newTask.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancelEvent = new EventEmitter<void>();
  @Output() addTaskEvent = new EventEmitter<NewTask>();
  enteredTitle = '';
  enteredDate='';
  enteredSummary='';
  onCancel(){
    this.cancelEvent.emit();
  }
  onSubmit(){
    this.addTaskEvent.emit({title: this.enteredTitle, dueDate: this.enteredDate, summary: this.enteredSummary});
  }

}
