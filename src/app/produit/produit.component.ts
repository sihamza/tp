import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

first=0;
second=0;
calcul;

produit(){
  this.calcul = this.first * this.second;
}
  constructor() { }

  ngOnInit() {
  }

}
