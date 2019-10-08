import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  somme=0 ;
  carre=0 ;
  
  getval(x:number) {
    this.carre = x ;
  }

  somme_event(x:number,y:number){
     this.somme = Number(x) + Number(y) ;
  }

  constructor() { }

  ngOnInit() {
  }

}
