import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau-component',
  templateUrl: './tableau-component.component.html',
  styleUrls: ['./tableau-component.component.css']
})
export class TableauComponentComponent implements OnInit {
  title="tableau";
  
  tab=[12,14,18,20];
  constructor() {   }


  min(){
  let m=this.tab[0];
  for(let i of this.tab)
  {
    if(m>i){m=i;}
  }
  return m;
  }
  sum(){
     let m=0;
  for(let i of this.tab )
  {
    m+=i;
  }
  return m;  }
  moy(){
    return this.sum()/this.tab.length;
  }
  ngOnInit() {
  }

}
