import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { IUser } from "./model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'api/user.json';

  constructor(private http: HttpClient) { }

  // Gets the user from the URL
  getUser(): Observable<IUser> {
    return this.http.get<IUser>(this.url).pipe(
      catchError(this.handleError)
    )
  }

  // Uploads changes back to the database through the API
  setUser(user: IUser) {
    // In this example this function will not work, since it needs a real API to write back data
    return this.http.post<IUser>(this.url, user)
      .pipe(
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
