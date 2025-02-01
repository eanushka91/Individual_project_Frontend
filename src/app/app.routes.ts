import { Routes } from '@angular/router';
import { ELicenseComponent } from './common/e-license/e-license.component';
import { FineIssuanceComponent } from './common/fine-issuance/fine-issuance.component';
import { PaymentComponent } from './common/payment/payment.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { ReportsComponent } from './common/reports/reports.component';
import { HomePageComponent } from './common/nav-bar/home-page.component';
import { SignupPageComponent } from './login/signup-page/signup-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { UserFineIssuenceComponent } from './common/user-fine-issuence/user-fine-issuence.component';
import { UserELicenseComponent } from './common/user-e-license/user-e-license.component';



export const routes: Routes = [
    {
        path:'',
        component:LoginPageComponent,
    },
    {
        path:"signup",
        component:SignupPageComponent
    },
    
    {
        path:'dashboard',
        component:HomePageComponent,
        children: [
            {
                path:"",
                component:DashboardComponent   
            },
            {
                path:"fine-issuance",
                component:FineIssuanceComponent
            },
            {
                path:"payment",
                component:PaymentComponent 
            },
            {
                path:"reports",
                component:ReportsComponent  
            },
            {
                path:"e-license",
                component:ELicenseComponent
            },
            {
                path:"userfine",
                component:UserFineIssuenceComponent
            },
            {
                path:"userlicense",
                component:UserELicenseComponent
            }
        ]
    },
  
    
];
