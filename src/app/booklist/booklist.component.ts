import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../book';
// import { Booklist } from '../mock-booklist';
import { BookService } from '../book.service';
// import { FilterPipe} from '../pipe/filter.pipe';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class BooklistComponent implements OnInit {

  books: Book[];

  selectedBook: Book;

  //  bookService: BookService

  onSelect(book: Book): void {

// alert(JSON.stringify(book));
    this.bookService.setSelectedBook(book);
  }
  getBooks(): void { 
    if (this.route.snapshot.paramMap.get('cat')) { 
      this.bookService.getBooksByCategory(this.route.snapshot.paramMap.get('cat')).subscribe(books => this.books = books);
    }
    else { //alert(2);
      this.bookService.getBooks().subscribe(books => this.books = books);
    }
  }

 /* getBooksByCategory(category: string): void {
    // this.books = Booklist;
    //  alert(3);
     this.bookService.getBooksByCategory(category).subscribe(books => this.books = books);
  }*/


  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
    // this.getBooksByCategory(this.route.snapshot.paramMap.get('cat'));
   
  }

}
