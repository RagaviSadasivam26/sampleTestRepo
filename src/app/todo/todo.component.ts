import { Component,OnInit } from '@angular/core';
import { TodoService } from '../todolist.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  task : any[] = [];

  constructor(private todoservice:TodoService)
  {
  }
  ngOnInit(): void
  {
    this.todoservice.firestorecollection.valueChanges({idField:'id'})
      .subscribe(item =>{
        this.task = item;
      })
  }
  onclick(titleinput: HTMLInputElement){
    if(titleinput.value)
    {
      this.todoservice.addTask(titleinput.value);
      titleinput.value ="";
    }
  }
  onselect(id:string, status:boolean)
  {
    this.todoservice.updatetaskstatus(id,status);
  }
  ondelete(id:string)
  {
    this.todoservice.deletetaskstatus(id);
  }
}
