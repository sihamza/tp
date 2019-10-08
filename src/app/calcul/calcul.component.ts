import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  somme=0 ;
  carre=0 ;
  check=true;
  
  getval(x:number) {
    this.carre = x ;
  }
  checked(x,y){
  this.check = x.value == '' || y.value == ''
  }
  somme_event(x:number,y:number){
     this.somme = Number(x) + Number(y) ;
  }

  constructor() { }

  ngOnInit() {
  }

}
