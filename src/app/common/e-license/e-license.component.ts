import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-e-license',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './e-license.component.html',
  styleUrl: './e-license.component.css'
})
export class ELicenseComponent {
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

  loadcard() {
    this.http.get("http://localhost:8080/e_license/get-all").subscribe(data => {
      console.log(data);
      this.licenseList = data;
    });
  }

  public addLicense() {
    this.http.post("http://localhost:8080/e_license/add-license", this.license).subscribe((data) => {
      alert("License Added!!!!");
      this.loadcard();
      this.showAddModal = false; 
    });
  }

  deleteLicenseById(id: any) {
    console.log(id);
    this.http.delete(`http://localhost:8080/e_license/delete-by-id/${id}`).subscribe(data => {
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
    this.http.put("http://localhost:8080/e_license/update-license", this.licenseTemp).subscribe(data => {
      alert("License Updated!!!!!");
      this.loadcard();
      this.showUpdateModal = false; 
    });
  }
  searchById() {
    this.http.get(`http://localhost:8080/e_license/search-by-licenseno/${this.searchId}`).subscribe((data: any) => {
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
    this.http.put(`http://localhost:8080/e_license/update-license`, license).subscribe(() => {
      alert(`License status updated to ${status}!`);
    });
  }
}
