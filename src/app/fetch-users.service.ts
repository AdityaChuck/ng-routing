import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Iuser } from "./Iusers"
import { Observable, throwError } from "rxjs"
import { catchError, retry } from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class FetchUsersService {

  private _url: string = "https://jsonplaceholder.typicode.com/posts"
  constructor( private http: HttpClient ) { }

  private handleError(error: HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      //client-side error
      errorMessage = `Error: ${error.error.message}`
    }else{
      //server-side error
      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`
    }
    return throwError(errorMessage)
  }

  getUsers(): Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this._url).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
 
}
