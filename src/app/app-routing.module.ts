import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { ManageCustomerComponent } from "./manage-customer/manage-customer.component";
import { PostNewsComponent } from "./post-news/post-news.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CustomerComponent } from "./customer/customer.component";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { AtmSimulatorComponent } from "./atm-simulator/atm-simulator.component";
import { BeneficiariesComponent } from "./beneficiaries/beneficiaries.component";
import { TransactionsListComponent } from "./transactions-list/transactions-list.component";
import { TransferFundsComponent } from "./transfer-funds/transfer-funds.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { RequestComponent } from "./request/request.component";
import { RequestListComponent } from "./request-list/request-list.component";
import { TrackYourStatusComponent } from "./track-your-status/track-your-status.component";
import { CreditAmountComponent } from "./credit-amount/credit-amount.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth.guard";
import { MyBeneficiariesComponent } from "./my-beneficiaries/my-beneficiaries.component";
import { MyTransactionsComponent } from "./my-transactions/my-transactions.component";
import { ViewNewsComponent } from "./view-news/view-news.component";
import { ProfileComponent } from "./profile/profile.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { AuthGuardLogin } from "./auth.guard.login";
import { WelcomeAdminComponent } from "./welcome-admin/welcome-admin.component";
import { RequestService } from "./request.service";
import { RequestsComponent } from "./requests/requests.component";
import { CompletedRequestsComponent } from "./completed-requests/completed-requests.component";

@NgModule({
    imports: [
        RouterModule.forRoot ([ 
            {
                path:'customer',component:CustomerComponent , data: {roles: ['ROLE_ADMIN']} ,canActivate: [AuthGuard], children:[
                   {path:'add-customer', component:AddCustomerComponent},
                   {path: 'customers-list',component:CustomersListComponent}

               
                ]
            },
            {path: 'requests', component:RequestsComponent, data: {roles: ['ROLE_ADMIN']} ,canActivate: [AuthGuard], children: [
                {path:'request-list', component:RequestListComponent},
                {path: 'completed-requests',component:CompletedRequestsComponent}

            ]
        },
            {path:'welcome-page',component:WelcomePageComponent},
            {path:'welcome-admin',component:WelcomeAdminComponent,data: {roles: ['ROLE_ADMIN']} ,canActivate: [AuthGuard]},
            {path:'manage-customer',component:ManageCustomerComponent, data: {roles: ['ROLE_ADMIN']} ,canActivate: [AuthGuard]},
            {path:'post-news' , component:PostNewsComponent, data: {roles: ['ROLE_ADMIN']} ,canActivate: [AuthGuard]},
            {path:'view-news' , component:ViewNewsComponent, data: {roles: ['ROLE_USER']} ,canActivate: [AuthGuard]},
            {path:'login', component:LoginComponent, canActivate:[AuthGuardLogin]},
            {path: 'forgot-password', component:ForgotPasswordComponent},
            {path:'atm-simulator',component:AtmSimulatorComponent, data: {roles: ['ROLE_USER']} ,canActivate: [AuthGuard]},
            {path:'beneficiaries',component:BeneficiariesComponent, data: {roles: ['ROLE_USER']} ,canActivate: [AuthGuard]},
            {path:'my-beneficiaries',component:MyBeneficiariesComponent, data: {roles: ['ROLE_USER']} ,canActivate: [AuthGuard]},
            {path:'my-transactions',component:MyTransactionsComponent, data: {roles: ['ROLE_USER']} ,canActivate: [AuthGuard]},
            {path:'transfer-funds',component:TransferFundsComponent, data: {roles: ['ROLE_USER']} ,canActivate: [AuthGuard]},
            {path:'transactions-list',component:TransactionsListComponent, data: {roles: ['ROLE_ADMIN']} ,canActivate: [AuthGuard]},
            {path: 'request', component:RequestComponent, data: {roles: ['ROLE_USER']} ,canActivate: [AuthGuard]},
            {path: 'track-your-status', component:TrackYourStatusComponent, data: {roles: ['ROLE_USER']} ,canActivate: [AuthGuard]},
            {path:'profile',component:ProfileComponent, data: {roles: ['ROLE_USER']} ,canActivate: [AuthGuard]},
            {path:'credit-amount',component:CreditAmountComponent, data: {roles: ['ROLE_USER']} ,canActivate: [AuthGuard]},
            {path:'',redirectTo:'/welcome-page' ,pathMatch:'full'},
            {path:'**',component:PageNotFoundComponent}
          ])

    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{
    
}