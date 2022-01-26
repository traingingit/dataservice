import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../services/articles.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  articles:any;
  constructor(private article:ArticlesService)
  {
    article.articles().subscribe((art:any)=>{
      this.articles=art
    });
   // console.warn(this.articles);
  }

  ngOnInit(): void {
  }

}
