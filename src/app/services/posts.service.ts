import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import jwtDecode from "jwt-decode";
import { Post } from '../model/posts';

const headers = new HttpHeaders();
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  port: string = "https://mango-mern-mean-server.herokuapp.com/mango"
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse){
    return throwError(error);
  }

  getPosts() : Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwTToken')}`
    })
    const decoded = jwtDecode(localStorage.getItem("jwTToken"))
    return this.http.get<any>(`${this.port}/post/${decoded.id}`, {headers: headers})
    .pipe(
      catchError(this.handleError)
    )
  }

  addPost(post): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwTToken')}`
    })
    const decoded = jwtDecode(localStorage.getItem("jwTToken"))
    return this.http.post<any>(`${this.port}/post/${decoded.id}/post`, post, {headers: headers})
    .pipe(
      catchError(this.handleError)
    )
  }

  removePost(post_id): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwTToken')}`
    })
    const decoded = jwtDecode(localStorage.getItem("jwTToken"))
    return this.http.delete<any>(`${this.port}/post/${decoded.id}/${post_id}`, {headers: headers})
    .pipe(
      catchError(this.handleError)
    )
  }

  updatePost(post: Post): Observable<Post>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwTToken')}`
    })
    const decoded = jwtDecode(localStorage.getItem("jwTToken"))
    return this.http.put<Post>(`${this.port}/post/${decoded.id}/${post._id}`, post, {headers: headers})
    .pipe(
      catchError(this.handleError)
    )
  }

}
