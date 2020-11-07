import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs"

export function handleError (error: HttpErrorResponse)  {
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