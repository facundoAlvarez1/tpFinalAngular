import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';
import { CarritoService } from './cart/cart.service';
import { CarritoComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa el servicio del carrito
import { MatDialogModule } from '@angular/material/dialog';
import { FinishCheckoutDialogComponent } from './finish-checkout-dialog/finish-checkout-dialog.component';
import { TransferInstructionsDialogComponent } from './transfer-instructions-dialog/transfer-instructions-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { AssistanceFormComponent } from './assistance-form/assistance-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    ProductsComponent,
    CarritoComponent,
    FinishCheckoutDialogComponent,
    TransferInstructionsDialogComponent,
    AssistanceFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProductService,
    CarritoService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
