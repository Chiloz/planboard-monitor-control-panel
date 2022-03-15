import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { IDivision } from "./model/division.model";

@Injectable({
  providedIn: 'root'
})
export class MailgroupService {
  private url = 'api/mailgroups.json';

  constructor(private http: HttpClient) {
  }

  // Gets all available mailgroups from the URL
  getMailgroups(): Observable<IDivision[]> {
    return this.http.get<any>(this.url).pipe(
      map(result => {
        return result.divisions
      }),
      catchError(this.handleError)
    )
  }
  
  private handleError (err: HttpErrorResponse) {
    let errorMessage = "";
    if(err.error instanceof ErrorEvent) {
        errorMessage = `An error occured: ${err.error.message}`
    } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage))
  }
}
