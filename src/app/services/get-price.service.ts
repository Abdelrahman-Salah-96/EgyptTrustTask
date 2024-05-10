import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../classes/customer/customer';
import { Observable } from 'rxjs';
import { Responsebody } from '../classes/response/response';

@Injectable({
  providedIn: 'root'
})
export class GetPriceService {
   /* url = "https://online.egypttrust.com/egyassignments/api/v2/assignments/pqm" */
  _url ="/egyassignments/api/v2/assignments/pqm";
  constructor(private _http:HttpClient){}

  getprice(customer:Customer):Observable<Responsebody>{
    return this._http.post<Responsebody>(this._url,customer)
  }
}
