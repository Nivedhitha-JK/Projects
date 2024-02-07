import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(tasks : [], searchTask : string){
    if(!tasks) return [];
    if(!searchTask) return tasks;

    searchTask = searchTask.toLowerCase();

    return tasks.filter((i:string)=>{
      return i.toLowerCase().includes(searchTask)
    })

    
    return null;
  }

}
