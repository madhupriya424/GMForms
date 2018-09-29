import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  question=[];
  constructor() { }

  ngOnInit() {
  }

  onAddQuestion(){
    this.question.push(" ");  
  }
}
