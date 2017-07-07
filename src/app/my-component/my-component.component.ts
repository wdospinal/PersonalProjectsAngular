import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
