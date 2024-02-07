import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  // title = 'To-Do-List-Angular';
  title = 'My Task List';
  taskList: string []=[];
  ngOnInit(){
    if(localStorage.getItem('my_tasks') != null){
    var data = localStorage.getItem('my_tasks');
    if(data != null){
      this.taskList = JSON.parse(data);
    }
  }
  else{
    window.alert('no data found in local storage');
  }
  
  }
}
