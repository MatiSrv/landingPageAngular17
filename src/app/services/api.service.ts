import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, IProductPost } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient){

  }
  private urlBase = 'https://fakestoreapi.com/products';


  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.urlBase);
  }

  getProduct(id:number):Observable<IProduct> {
    return this.http.get<IProduct>(this.urlBase + '/'+id);
  }

  postProduct(product:IProductPost):Observable<void> {
    return this.http.post<void>(this.urlBase, product);
  }
}
