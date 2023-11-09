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
import { CarritoComponent } from './cart/cart.component'; // Importa el servicio del carrito

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    ProductsComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ProductService,
    CarritoService, // Agrega el CarritoService a la lista de proveedores
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
