import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
 @Input() taskList:string | any;
 newTask:any;
  constructor() { }

  ngOnInit(): void {
  }
  newTodo(){
    if(this.newTask.length > 0){
    this.taskList.unshift(this.newTask);   // unshift function push the top of the array
      localStorage.setItem('my_tasks',JSON.stringify(this.taskList));
      this.newTask='';
    }
    else{
      window.alert("Enter task...");
    }
          // this.newTask=undefined; // by assigning undefined to the var it will clear data once the btn is clicked in UI
  }

}
