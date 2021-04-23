import { Cart } from './../models/cart';
import { ListResponseModel } from './../models/listResponseModel';
import { ResponseModel } from './../models/ResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl ="https://localhost:44314/api/Baskets/";
  constructor(private httpClient:HttpClient) { }

  add(cart:Cart):Observable<ResponseModel>{
      return this.httpClient.post<ResponseModel>(this.apiUrl+"add",cart);
  }

  get():Observable<ListResponseModel<Cart>>{
    return this.httpClient.get<ListResponseModel<Cart>>(this.apiUrl+"getbasket");
  }
}