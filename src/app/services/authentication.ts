import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOption = {
  headers: new HttpHeaders({"Content-Type": "application/json"})
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  port: string = "https://mango-mern-mean-server.herokuapp.com/mango"
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return throwError(
      error.error.message);
  };

  signin(signin): Observable<any>{
    return this.http.post<any>(`${this.port}/user/auth/signin`, signin, httpOption)
    .pipe(
      catchError(this.handleError)
    )
  }

  signup(signup) : Observable<any>{
    return this.http.post<any>(`${this.port}/user/auth/signup`, signup, httpOption)
    .pipe(
      catchError(this.handleError)
    )
  }

  resend(email): Observable<any>{
    return this.http.post<any>(`${this.port}/user/auth/resend`, email, httpOption)
    .pipe(
      catchError(this.handleError)
    )
  }

  verified(userId, randomNumber): Observable<any>{
    return this.http.put<any>(`${this.port}/user/auth/${userId}/${randomNumber}/verify`, {}, httpOption)
    .pipe(
      catchError(this.handleError)
    )
  }

  changePassword(passwords, userId): Observable<any>{
    return this.http.put<any>(`${this.port}/user/auth/${userId}/change_password`, passwords, httpOption)
    .pipe(
      catchError(this.handleError)
    )
  }

  forgetPassword(email) :Observable <any>{
    return this.http.put<any>(`${this.port}/user/auth/forget_password`, email, httpOption)
    .pipe(
      catchError(this.handleError)
    )
  }

  changeForgetPassword(password, userId, randomNumber): Observable<any>{
    return this.http.put<any>(`${this.port}/user/auth/forgot_password/${userId}/${randomNumber}`, {password}, httpOption)
    .pipe(
      catchError(this.handleError)
    )
  }
}
