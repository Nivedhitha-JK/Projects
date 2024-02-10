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
info:any=[
  {fName:'Arjun',age:'22',country:'UK'},
  {fName:'Vikram',age:'24',country:'India'},
  {fName:'Vijay',age:'26',country:'France'},
  {fName:'Raghav',age:'27',country:'Europe'}

];

// info:any=null;
// day= new Date().getDay();


// console.log(day);
day:number | any;
isSuccess:boolean = false;
isDanger:boolean = false;
isWarning:boolean = false;
message:any;
ngOnInit(){
   this.day = new Date().getDay();
  console.log(this.day);  
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
success()
{
  this.isSuccess = true;
  this.isDanger = false;
  this.isWarning = false;
  this.message='Success Clicked!';
}

danger()
{
  this.isSuccess =false ;
  this.isDanger = true;
  this.isWarning = false;
  this.message='Danger Clicked!';
}
warning()
{
  this.isSuccess =false ;
  this.isDanger =false ;
  this.isWarning = true;
  this.message='Warning Clicked!';
}

user = {pName:'ajay',age:'22'};
// user.age='23';
}
