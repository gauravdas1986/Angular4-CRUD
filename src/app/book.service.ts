import { Injectable } from '@angular/core';
import { Book } from './book';
import { Booklist } from './mock-booklist';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
// import  'rxjs/add/operator/map';

// import { Injectable } from '@angular/core';
// import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

  //  this.headers.append('Access-Control-Allow-Origin' , '*');
  //   this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  //   this.headers.append('Accept','application/json');
  //   this.headers.append('content-type','application/json');
};

@Injectable({
  providedIn: 'root'
})
export class BookService {
  message: string;
  selectedBook: Book;
  bookList: Book[];
  getBooksURL: "http://localhost:8080/SpringRestfulWebServicesCRUDExample/books";

  setSelectedBook(book: Book): void {
    this.selectedBook = book;
  }

  getSelectedBook(): Observable<Book> {
    return of(this.selectedBook);
  }

  getBook(id: number): Observable<Book> {

    return of(Booklist.find(book => book.id === id));
  }

  getBooks(): Observable<Book[]> {
    httpOptions.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
    return this.http.get<Book[]>('http://localhost:8080/SpringRestfulWebServicesCRUDExample/books')
    .pipe(
    tap(bookList => this.log('fetched books')),
    catchError(this.handleError('getBookList', []))
    );
  }

getBooksByCategory(category : string): Observable<Book[]> {
    httpOptions.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
    return this.http.get<Book[]>('http://localhost:8080/SpringRestfulWebServicesCRUDExample/bookByCategory/'+category)
    .pipe(
    tap(bookList => this.log('fetched books')),
    catchError(this.handleError('getBookList', []))
    );
  }

  private log(message: string) {
    this.message = "ERRORRRR";
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure

      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  constructor(private http: HttpClient) {

  }

}

