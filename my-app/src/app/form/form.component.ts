import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  text: string='';

  @Output() onSubmit: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(){
    this.onSubmit.emit(this.text);
    this.text = '';
  }
}
