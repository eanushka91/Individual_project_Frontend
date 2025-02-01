import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fine-issuance',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './fine-issuance.component.html',
  styleUrl: './fine-issuance.component.css'
})
export class FineIssuanceComponent {
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
 
  

  public showAddModal: boolean = false;
  public showUpdateModal: boolean = false;
  public showSearchModal: boolean = false;

  constructor(private http: HttpClient) {
    this.loadcard();
  }

  private token: any = JSON.parse(localStorage.getItem('token') || '');
  private myheader: HttpHeaders = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  loadcard() {
    this.http.get("http://localhost:8080/fine/get-all", { headers: this.myheader }) .subscribe(data => {
      console.log(data);
      this.fineList = data;
    });
  }

  public addFine() {
    this.fine.status = 'unpaid';
    this.http.post("http://localhost:8080/fine/add-fine", this.fine, { headers: this.myheader }).subscribe((data) => {
      alert("Fine Added!!!!");
      this.loadcard();
      this.showAddModal = false; 
    });
  }

  deleteFineById(id: any) {
    console.log(id);
    this.http.delete(`http://localhost:8080/fine/delete-by-id/${id}`, { headers: this.myheader }).subscribe(data => {
      alert("Fine deleted !!!!");
      this.loadcard();
    });
  }


  public fineTemp:any={}
  updateFine(fine:any){
    console.log(fine);
    this.fineTemp=fine;
    this.showUpdateModal = true;  
    
  }

  saveFine() {
    this.http.put("http://localhost:8080/fine/update-fine", this.fineTemp, { headers: this.myheader }).subscribe(data => {
      alert("Fine Updated!!!!!");
      this.loadcard();
      this.showUpdateModal = false; 
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
