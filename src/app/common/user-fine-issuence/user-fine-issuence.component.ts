import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-fine-issuence',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './user-fine-issuence.component.html',
  styleUrl: './user-fine-issuence.component.css'
})
export class UserFineIssuenceComponent {
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

  private token: any = JSON.parse(localStorage.getItem('token') || '');
  private myheader: HttpHeaders = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  loadcard() {
    this.http.get("http://localhost:8080/fine/get-all", { headers: this.myheader }).subscribe(data => {
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
    this.http.put("http://localhost:8080/fine/update-fine", this.fineTemp, { headers: this.myheader }).subscribe(data => {
      alert("Fine Updated!!!!!");
      this.loadcard();
    });
  }

  searchById() {
    this.http.get(`http://localhost:8080/fine/search-by-vehicleno/${this.searchId}`, { headers: this.myheader }).subscribe((data: any) => {
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
