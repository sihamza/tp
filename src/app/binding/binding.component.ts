import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  
  nom:string ="ERICAANDBIAFTW";
  age = 21 ;
  contenu = "" ;
  actif:boolean = false ;
  message:string = "DSI" ;
  constructor() { }

  onKeyUp(event:any) {
    console.log(event.target + " "+ event.target.value);
    this.contenu = event.target.value; }

  ngOnInit() {
  }

  infos() {
    return this.nom +" a pour âge " + this.age;
  }

  onAfficher() {
    console.log(this.nom);
  }

  onAfficherContenu(val:string){
    console.log(val); }
  }
