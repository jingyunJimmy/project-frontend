/**
 * Create a new instance of CommonHttpService
 * @class CommonHttpService
 * @description
 * This service define a wrapper over http requests GET,POST,PUT,PATCH,DELETE
 */

 import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { Observable } from 'rxjs/internal/Observable';
 import { CommonBase } from '@interfaces/common-base';
 
 @Injectable({
   providedIn: 'root'
 })
 export class CommonHttpService {
 
   constructor(
     private http: HttpClient
   ) { }
 
   /**
    * @function get
    * @description
    * Constructs a GET request that interprets the body as a JSON object and returns the response body in a given type.
    * It will parse the the response and map it with {ApiResponseModel} to set common response format
    * @param  {string} url
    * @param  {CommonBase} [n]
    * @return {ApiResponseModel} Promise of type ApiResponseModel
    */
   get<T>(url: string, args: CommonBase = {}): Observable<T> {
     // const params = new HttpParams(args);
     return this.http.get(url, { params: args }) as Observable<T>;
   }
 
 
   /**
    * @function post
    * @description
    * Constructs a wrapper over POST request that interprets the body as a JSON object and returns an observable of the response.
    * It will parse the the response and map it with {ApiResponseModel} to set common response format
    * @param  {string} url
    * @param  {CommonBase} [n]
    * @return {ApiResponseModel} Promise of type ApiResponseModel
    */
   post<T>(url: string, args: CommonBase = {}): Observable<T> {
     // const params = new HttpParams(args);
     let headers = new HttpHeaders();
     return this.http.post(url, args, {
       headers: headers
     }) as Observable<T>;
   }
 }
 