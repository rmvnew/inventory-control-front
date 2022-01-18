import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  redirect(){
    this.route.navigateByUrl('/category/create')
  }

}
