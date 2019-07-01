import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList = [
    {id:'214', body: 'Mam fajnego psa', author: {name: "Piotr"}},
    {id:'215', body: 'Mam fajnego psa 2', author: {name: "Michal"}},
    {id:'216', body: 'Mam fajnego psa 3', author: {name: "Dominik"}},
    {id:'217', body: 'Mam fajnego psa 4', author: {name: "Adam"}},
    {id:'218', body: 'Mam fajnego psa 5', author: {name: "Grzegorz"}},
    {id:'219', body: 'Mam fajnego psa 6', author: {name: "Dorota"}},
    {id:'210', body: 'Mam fajnego psa 7 ', author: {name: "Jan"}},
  ];

  constructor() { }

  ngOnInit() {
  }

}
