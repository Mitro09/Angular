import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mono-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todos List'
  text: string='';
  todos = [
    { id:1, text:'Learn Angular', done:true },
    { id:2, text:'Suffer', done:false},
    { id:3, text:'Switch to React', done:false}
  ];

  handleSubmit(event: Event){
    event.preventDefault();
    console.log(this.text);
    const maxId = this.todos.length ? this.todos[this.todos.length-1].id : 0;
    this.todos.push( { id:maxId + 1, text: this.text, done: false } );
    this.text='';
  }

  handleRemove(index:number){
    this.todos.splice(index,1);
    
  }

  handleDone(index:number){
    this.todos[index].done = true;
  }

 
}
