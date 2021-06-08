import { Injectable } from '@angular/core';
import { Todo } from '../list/Todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  async fetchTodos(){
    const response = await fetch('http://localhost:8081/todos');
    return response.json();
  }

  async addTodo(text: string){
    return fetch('http://localhost:8081/todos',{
    method : 'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify({text})
    });
  }

  async removeTodo(id:number){
    return fetch(`http://localhost:8081/todos/${id}`,{
      method : 'DELETE',
    })
  }

  async toggleDone(todo:Todo){
    await fetch(`http://localhost:8081/todos/${todo.id}`,{
      method : 'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({done:!todo.done})
    })
    this.fetchTodos();
  }
}
