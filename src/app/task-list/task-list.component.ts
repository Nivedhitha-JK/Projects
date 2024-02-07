import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
@Input() tasks:string | any;
searchTask:any;

  constructor() { }

  ngOnInit(): void {
  }
remove(index:number){
  this.tasks.splice(index,1);
  if (this.tasks != null){
  localStorage.setItem('my_tasks',JSON.stringify((this.tasks)));
}

}
}
