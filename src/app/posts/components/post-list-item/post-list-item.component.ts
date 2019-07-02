import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit, OnChanges {

  @Input() post = null;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(!this.post.comments)
      this.post.comments = [{ body: 'to jest slabe' }, { body: 'to jest cudowne'}];
  }

}
