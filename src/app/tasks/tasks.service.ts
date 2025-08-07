import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";


@Injectable({providedIn: 'root'})
export class TasksService{
      private tasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u2',
    title: 'Build a Portfolio Website',
    summary: 'Design and develop a personal portfolio to showcase your projects and skills.',
    dueDate: '2025-11-15',
  },
  {
    id: 't3',
    userId: 'u1',
    title: 'Learn TypeScript',
    summary: 'Understand TypeScript fundamentals and how to integrate it with modern frameworks.',
    dueDate: '2025-10-10',
  },
  {
    id: 't4',
    userId: 'u3',
    title: 'Complete UX Research',
    summary: 'Conduct user interviews and surveys to gather insights for the app redesign.',
    dueDate: '2025-09-30',
  },
  {
    id: 't5',
    userId: 'u2',
    title: 'Deploy Node.js App',
    summary: 'Set up CI/CD pipeline and deploy the Node.js application to a cloud platform.',
    dueDate: '2025-08-25',
  },
  {
    id: 't6',
    userId: 'u3',
    title: 'Write Unit Tests',
    summary: 'Add unit tests for all service layers using Jasmine and Karma.',
    dueDate: '2025-09-05',
  },
];
constructor(){
  const tasks = localStorage.getItem('tasks');

  if (tasks){
    this.tasks= JSON.parse(tasks);
  }
}

getUserTasks(userId:string){
    return this.tasks.filter((task)=>task.userId===userId);
}

addTask(taskData: NewTaskData, userId: string) {
  this.tasks.unshift({
    id: new Date().getTime().toString(),
    userId: userId,
    title: taskData.title,
    summary: taskData.summary,
    dueDate: taskData.date
  });
  this.saveTasks();
}
removeTask(id:string){
    this.tasks = this.tasks.filter((task) => task.id !==id);
    this.saveTasks();
}

 private saveTasks() {
  localStorage.setItem('tasks',JSON.stringify(this.tasks));
 }
}
