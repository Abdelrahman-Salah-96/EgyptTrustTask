import { Component, OnInit } from '@angular/core';
import { Customer } from '../classes/customer/customer';
import { GetPriceService } from '../services/get-price.service';
import { Responsebody } from '../classes/response/response';


@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrl: './get-quote.component.css'
})
export class GetQuoteComponent implements OnInit {
customerModel = new Customer("ABC888888999998","","","","","");
constructor(private customerService:GetPriceService){}
response!:Responsebody;
isResponse :boolean= false;
ngOnInit(): void {
};
submitdata(){
this.customerService.getprice(this.customerModel).subscribe(data=>{
   this.response =data
   this.isResponse = true;
})
}
}

