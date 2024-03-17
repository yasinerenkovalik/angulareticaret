import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import {  Create_Product } from 'src/app/contracts/create_product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }

  create(product:Create_Product,successCallBack?:any){
    console.log(product)
    this.httpClientService.post({
      controller:"Product"
    },
    product
    )
    .subscribe(result=>{
     successCallBack()

     });

  }
}
