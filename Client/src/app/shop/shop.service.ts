import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrands } from '../shared/Models/brands';
import { IPagination } from '../shared/Models/pagination';
import { IProductType } from '../shared/Models/productType';
import {map} from 'rxjs/operators';
import { shopParams } from '../shared/Models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) { }

  getProducts(shopParams: shopParams) {
    let params = new HttpParams();

    if(shopParams.brandId !==0){
      params= params.append('brandId',shopParams.brandId.toString());
    }

    if(shopParams.typeId !==0){
      params=params.append('typeId', shopParams.typeId.toString());
    }
    if(shopParams.search){
      params = params.append('search', shopParams.search);
    }

      params=params.append('sort', shopParams.sort);
      params=params.append('pageIndex', shopParams.pageNumber.toString());
      params=params.append('pageIndex', shopParams.pageSize.toString());

    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
    .pipe(
      map(response =>{
        return response.body;
      })
    );
  }
  getBrands() {
    return this.http.get<IBrands[]>(this.baseUrl + 'products/brands')
  }
  getProductType(){
    return this.http.get<IProductType[]>(this.baseUrl + 'products/types')
  }
}
