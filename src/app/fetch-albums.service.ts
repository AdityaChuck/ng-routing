import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable, throwError } from "rxjs"
import { catchError, retry } from "rxjs/operators"
import { Ialbum } from "./Ialbum"
import { Iuser } from './Iusers';
import { handleError } from "./ErrorHandler"

@Injectable({
  providedIn: 'root'
})
export class FetchAlbumsService {

  private _url = "https://jsonplaceholder.typicode.com/albums"
  constructor( private http: HttpClient ) { }

  // private handleError(error: HttpErrorResponse){
  //   let errorMessage = ""
  //   if(error.error instanceof ErrorEvent){
  //     //client-side Error
  //     errorMessage= `error: ${error.error.message}`
  //   }else{
  //     errorMessage= `error code: ${error.status}\nMessage: ${error.message}`
  //   }
  //   return throwError(errorMessage)
  // }

  getAlbums(): Observable<Ialbum[]>{
    return this.http.get<Iuser[]>(this._url).pipe(
      retry(1),
      catchError(handleError)
    )
  }
}
