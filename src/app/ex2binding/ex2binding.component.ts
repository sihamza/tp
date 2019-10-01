import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2binding',
  templateUrl: './ex2binding.component.html',
  styleUrls: ['./ex2binding.component.css']
})
export class Ex2bindingComponent implements OnInit {
  name ="popey";
  img = "https://i.pinimg.com/originals/22/4c/42/224c4294858567cce47cd3cb6d56e34a.jpg";
  age = 18 ;
  constructor() { }

  checked(){
    return  !(this.age >= 18) ; 
  }

  ngOnInit() {
  }

}
