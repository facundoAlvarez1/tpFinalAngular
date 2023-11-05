import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './productos/productos.component';
import { ProductService } from './product.service';
import { CarritoService } from './carrito/carrito.service';
import { CarritoComponent } from './carrito/carrito.component'; // Importa el servicio del carrito

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    ProductosComponent,
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
