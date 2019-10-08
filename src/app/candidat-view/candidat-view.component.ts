import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidat-view',
  templateUrl: './candidat-view.component.html',
  styleUrls: ['./candidat-view.component.css']
})
export class CandidatViewComponent implements OnInit {
  tabCandidats = [
  {nom:'Popey',image:'https://i.pinimg.com/originals/22/4c/42/224c4294858567cce47cd3cb6d56e34a.jpg', nb:16, parti:true},
  {nom:'Sam',image:'../assets/happy.jpg', nb:14, parti:false },
  {nom:'Donald',image:'../assets/donald.png', nb:44, parti:false}
];
  nb_ind() {
    let nb = 0 ;
    this.tabCandidats.forEach( x => {
      nb += ( !x['parti'] ? 1 : 0 )
    });
    return nb ;
  }
  incri(x) {
    this.tabCandidats[x]['nb'] ++ ;
  }
  constructor() { }

  ngOnInit() {
  }

}
