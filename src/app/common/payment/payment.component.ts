import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  public fine: any = {
    vehicleno: "",
    licenseno:"",
    violation: "",
    location: "",
    date: "",
    time: "",
    fineamount: "",
    status:""
  };

  public fineList: any = [];
  public searchId: string = '';
  public searchResult: any = null;
 
  
  public showSearchModal: boolean = false;

  constructor(private http: HttpClient) {
    this.loadcard();
  }

  loadcard() {
    this.http.get("http://localhost:8080/fine/get-all").subscribe(data => {
      console.log(data);
      this.fineList = data;
    });
  }

  public fineTemp:any={}
  updateFine(fine:any){
    console.log(fine);
    this.fineTemp=fine;  
    
  }

  saveFine() {
    this.http.put("http://localhost:8080/fine/update-fine", this.fineTemp).subscribe(data => {
      alert("Fine Updated!!!!!");
      this.loadcard();
    });
  }

  searchById() {
    this.http.get(`http://localhost:8080/fine/search-by-vehicleno/${this.searchId}`).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.searchResult = data;
        this.showSearchModal = true;
      } else {
        alert("Fine not found!");
        this.searchResult = null;
      }
    }, (error) => {
      alert("Error occurred while searching for fine!");
      this.searchResult = null;
    });
  }
}
