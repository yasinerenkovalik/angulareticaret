import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private url(requestParameters:RequestParameters){
    return`${requestParameters.baseUrl?requestParameters.baseUrl:this.baseUrl}/${requestParameters.controller}${requestParameters.action?`/${requestParameters.action}`:""}`;

  }

  constructor(private httpClient:HttpClient,@Inject("baseUrl") private baseUrl:string) {}
  get<T>(requestParameters:Partial<RequestParameters>,id?:string):Observable<T>{
    let url:string=""
    if(requestParameters.fullEndPoint)
      url=requestParameters.fullEndPoint;
    else
      url=`${this.url(requestParameters)}${id?`/${id}`:``}`;

   return this.httpClient.get<T>(url,{headers:requestParameters.headets});
    

  }
  post<T>(requestParameters:Partial<RequestParameters>,body:Partial<T>){
    let url:string="";
    if(requestParameters.fullEndPoint)
      url=requestParameters.fullEndPoint;
    else
      url= `${this.url(requestParameters)}`;

   return this.httpClient.post<T>(url,body,{headers:requestParameters.headets});
  }
  put<T>(requestParameters:Partial<RequestParameters>,body:Partial<T>):Observable<T>{
    let url:string="";
    if(requestParameters.fullEndPoint)
      url=requestParameters.fullEndPoint;
    else
      url= `${this.url(requestParameters)}`;

    return this.httpClient.put<T>(url,body,{headers:requestParameters.headets});
  }
  delete<T>(requestParameters:Partial<RequestParameters>,id:string):Observable<T>{
    let url:string="";
    if(requestParameters.fullEndPoint)
      url=requestParameters.fullEndPoint;
    else
      url= `${this.url(requestParameters)}/${id}`;

    return this.httpClient.delete<T>(url,{headers:requestParameters.headets});

  }
}

export class RequestParameters{
  controller?:string;
  action?:string;
  headets?:HttpHeaders;
  baseUrl?:string;
  fullEndPoint?:string;
}
