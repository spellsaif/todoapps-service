import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todoList : string[] = ['do jogging', 'sightseeing', 'go for a walk with someone and enjoy'];

  item : string = '';

  handleInput(event: any) {
    this.item=event.target.value;
  }

  deleteItem(element: string ) {
    this.todoList = this.todoList.filter( list => list != element);
  }

  handleClick() {
    this.todoList.push(this.item)
    console.log(this.todoList);
    this.item = '';
  }

}
