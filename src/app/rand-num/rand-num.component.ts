import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rand-num',
  templateUrl: './rand-num.component.html',
  styleUrls: ['./rand-num.component.css']
})
export class RandNumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  quantity:number=1;
  randNum=1;
  increment(){
      this.randNum+=Math.floor(Math.random() * 10);
      this.quantity=this.randNum;

  }
  decrement(){
    this.randNum-=Math.floor(Math.random() * 10);
      this.quantity=this.randNum;
  }
}
