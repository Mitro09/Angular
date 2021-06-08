import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Todo } from './Todo';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Input() todos! : Todo[];

@Output() onDone: EventEmitter<number> = new EventEmitter();
@Output() onRemove: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleDone(id:number){
    this.onDone.emit(id);
  }

  handleRemove(id:number){
    this.onRemove.emit(id); 
  }

}
