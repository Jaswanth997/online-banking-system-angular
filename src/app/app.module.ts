import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule, MatDatepicker} from '@angular/material/datepicker';
import { HttpClientModule, HTTP_INTERCEPTORS} from  '@angular/common/http';

import { AppComponent } from './app.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { PostNewsComponent } from './post-news/post-news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { AtmSimulatorComponent } from './atm-simulator/atm-simulator.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { HomeComponent } from './home/home.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';    
import { CustomerSearchPipe } from './customer-search.pipe';
import { BeneficiarySearchPipe } from './beneficiary-search.pipe';
import { RequestComponent } from './request/request.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestSearchPipe } from './request-search.pipe';
import { TransactionSearchPipe } from './transaction-search.pipe';
import { TrackYourStatusComponent } from './track-your-status/track-your-status.component';
import { CreditAmountComponent } from './credit-amount/credit-amount.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { RequestInterceptor } from './request.interceptor';
import { ViewNewsComponent } from './view-news/view-news.component';
import { MyBeneficiariesComponent } from './my-beneficiaries/my-beneficiaries.component';
import { MyTransactionsComponent } from './my-transactions/my-transactions.component';
import { NewsPipe } from './news.pipe';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { CustomerService } from './customer.service';
import { CompletedRequestsComponent } from './completed-requests/completed-requests.component';
import { RequestsComponent } from './requests/requests.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    ManageCustomerComponent,
    PostNewsComponent,
    PageNotFoundComponent,
    CustomerComponent,
    AtmSimulatorComponent,
    BeneficiariesComponent,
    TransferFundsComponent,
    CustomersListComponent,
    TransactionsListComponent,
    HomeComponent,
    WelcomePageComponent,
    ProfileComponent,
    CustomerSearchPipe,
    BeneficiarySearchPipe,
    RequestComponent,
    RequestListComponent,
    RequestSearchPipe,
    TransactionSearchPipe,
    TrackYourStatusComponent,
    CreditAmountComponent,
    LoginComponent,
    ViewNewsComponent,
    MyBeneficiariesComponent,
    MyTransactionsComponent,
    NewsPipe,
    ForgotPasswordComponent,
    WelcomeAdminComponent,
    CompletedRequestsComponent,
    RequestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDatepickerModule,
    //MatDatepicker,
    HttpClientModule
  
  ],

 
  
  providers: [
    // CustomerService,{
    //   provide: MatDatepickerModule,
    // },
    UserService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi :true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
