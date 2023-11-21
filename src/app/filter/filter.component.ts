import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CarritoService } from '../cart/cart.service';

interface Product {
  name: string;
  category: string;
  price: number;
  img: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  products: Product[] = [];
  filterCategory: string = '';
  filterPrice: string = '';
  filterSearch: string = '';
  productsFiltered: Product[] = [];
  noResultsFound: boolean = false;


  constructor(private productService: ProductService, private carritoService: CarritoService) {}


  ngOnInit() {
    this.products = this.productService.getProducts();
    this.applyFilter();
  }

  applyFilter() {
    let productsFilteredTemp = [...this.products];
    if (this.filterCategory) {
      productsFilteredTemp = productsFilteredTemp.filter(producto => producto.category === this.filterCategory);
    }
    if (this.filterPrice) {
      const [minPrice, maxPrice] = this.filterPrice.split('-');
      const minPriceInt = parseInt(minPrice);
      const maxPriceInt = parseInt(maxPrice);

      productsFilteredTemp = productsFilteredTemp.filter(producto => {
        return producto.price >= minPriceInt && producto.price <= maxPriceInt;
      });
    }

    // Filtrar los productos por nombre si se ingresa una búsqueda
    if (this.filterSearch) {
      productsFilteredTemp = productsFilteredTemp.filter(producto =>
        producto.name.toLowerCase().includes(this.filterSearch.toLowerCase())
      );
    }
    this.productsFiltered = productsFilteredTemp;
    this.noResultsFound = this.productsFiltered.length === 0;
    console.log('Productos filtrados:', this.productsFiltered);
  }

  addToCart(producto: Product) {
    // Utiliza el servicio del carrito para agregar el producto al carrito
    this.carritoService.addToCart(producto);
  }

  clearFilter() {
    // Limpia todos los filtros
    this.filterCategory = '';
    this.filterPrice = '';
    this.filterSearch = '';
    this.applyFilter();
  }
}

