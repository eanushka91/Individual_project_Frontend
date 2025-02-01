import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-e-license',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './user-e-license.component.html',
  styleUrl: './user-e-license.component.css'
})
export class UserELicenseComponent {
  public license: any = {
    name: "",
    dob: "",
    licenseno: "",
    address: "",
    issuedate: "",
    expirydate: "",
    status:""
  };
  public licenseList: any = [];
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
    this.http.get("http://localhost:8080/e_license/get-all", { headers: this.myheader }).subscribe(data => {
      console.log(data);
      this.licenseList = data;
    });
  }

  public addLicense() {
    this.http.post("http://localhost:8080/e_license/add-license", this.license, { headers: this.myheader }).subscribe((data) => {
      alert("License Added!!!!");
      this.loadcard();
      this.showAddModal = false; 
    });
  }

  deleteLicenseById(id: any) {
    console.log(id);
    this.http.delete(`http://localhost:8080/e_license/delete-by-id/${id}`, { headers: this.myheader }).subscribe(data => {
      alert("License deleted !!!!");
      this.loadcard();
    });
  }


  public licenseTemp:any={}
  updatelicense(license:any){
    console.log(license);
    this.licenseTemp=license;
    this.showUpdateModal = true;  
    
  }

  saveLicense() {
    this.http.put("http://localhost:8080/e_license/update-license", this.licenseTemp, { headers: this.myheader }).subscribe(data => {
      alert("License Updated!!!!!");
      this.loadcard();
      this.showUpdateModal = false; 
    });
  }
  searchById() {
    this.http.get(`http://localhost:8080/e_license/search-by-licenseno/${this.searchId}`, { headers: this.myheader }).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.searchResult = data;
        this.showSearchModal = true;
      } else {
        alert("License not found!");
        this.searchResult = null;
      }
    }, (error) => {
      alert("Error occurred while searching for license!");
      this.searchResult = null;
    });
  }

  public setStatus(license: any, status: string) {
    license.status = status;
    this.http.put(`http://localhost:8080/e_license/update-license`, license, { headers: this.myheader }).subscribe(() => {
      alert(`License status updated to ${status}!`);
    });
  }
}