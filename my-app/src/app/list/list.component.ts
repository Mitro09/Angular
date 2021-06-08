import { Component, Input, OnInit } from '@angular/core';
import { Todo } from './Todo';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Input() todos! : Todo[];
  constructor() { }

  ngOnInit(): void {
  }

}
