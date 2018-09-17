import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { BooklistComponent } from '../booklist/booklist.component';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  
  constructor(private booklistComponent: BooklistComponent,private route: ActivatedRoute,private bookService: BookService) { }
  ngOnInit() {
  }

}
