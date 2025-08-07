import { Component, Input } from '@angular/core';
import { NewTaskData } from './task/task.model';
import { TasksService} from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input ({ required: true }) name!: string;
  @Input ({required:true}) userId!:string;
  isAddingTask = false;
  // private tasksService= new TaskService();
  // private tasksService: TasksService;
  
  constructor(private tasksService: TasksService) {}

get selectedUserTasks() {
  // Example: filter tasks for the current user id
  return this.tasksService.getUserTasks(this.userId);
}

 onStartAddTask(){
  this.isAddingTask = true;

 }
 onCloseAddTask() {
  this.isAddingTask = false;
 }

}