import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http = inject(HttpClient)
  constructor() { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/api/products')
  }
}
