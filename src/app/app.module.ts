import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormSkeletComponent } from './form-skelet/form-skelet.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MenuComponent } from './menu/menu.component';
import { AccountComponent } from './account/account.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { CardsComponent } from './cards/cards.component';
import { ScanComponent } from './scan/scan.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MarkDialogComponent } from './map/mark-dialog/mark-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FormSkeletComponent,
    MapComponent,
    MenuComponent,
    AccountComponent,
    ReceiptComponent,
    CardsComponent,
    ScanComponent,
    CheckoutComponent,
    MarkDialogComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    GoogleMapsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }