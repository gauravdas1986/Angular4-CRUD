import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Router} from "@angular/router";

import { BookService } from '../book.service';
import { Book } from '../book';

const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
}

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  @Input() selectedBook: Book;
 
  getSelectedbook(): void {
    this.bookService.getSelectedBook().subscribe(selectedBook => this.selectedBook = selectedBook);
//  alert('__'+JSON.stringify(this.selectedBook));
  }

  // getBook(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.bookService.getBook(id)
  //     .subscribe(book => this.selectedBook = book);
  // }
  onSubmit(book: Book) {
    // httpOptions.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    // httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    // httpOptions.headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
    // httpOptions.headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:8080/SpringRestfulWebServicesCRUDExample/addBook', book, httpOptions).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/booklist']);
      },
      err => console.log({
        error: err
      })
    )


  }

  onUpdate(book: Book) {
    // alert(JSON.stringify(book));
    this.http.put('http://localhost:8080/SpringRestfulWebServicesCRUDExample/updateBook', book, httpOptions).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/booklist']);
      },
      err => console.log({
        error: err
      })
    )


  }

  constructor(private router: Router,private http: HttpClient, private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.getSelectedbook();
    if(!this.route.snapshot.paramMap.get('id')){
      this.selectedBook = null;
    }
    // this.getBook();
  }
}
