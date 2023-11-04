import { Component } from '@angular/core';
<<<<<<< HEAD
import { CarritoService } from '../carrito.service';
import { MatDialog } from '@angular/material/dialog';
=======
import { ProductService} from '../product.service'; // Importa el servicio y el tipo Producto
>>>>>>> desarrollo

export interface Producto {
  id : number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
<<<<<<< HEAD


  mostrarCarrito = false;
  mostrarVentanaEmergente = false;

  carrito: Producto[] = [];

  productos: Producto[] = [
    { 
      id:1,
      nombre: 'Alquiler Auto',
      categoria: 'lunaDeMiel',
      precio: 11000,
      imagen: 'assets/images/lunaDeMiel/AlquilerAuto.jpg'
    },
    {
      id:2,
      nombre: 'Desayuno Continental',
      categoria: 'lunaDeMiel',
      precio: 5500,
      imagen: 'assets/images/lunaDeMiel/desayunoContinental.jpg'
    },
    { 
      id:3,
      nombre: 'Estadia',
      categoria: 'lunaDeMiel',
      precio: 10000,
      imagen: 'assets/images/lunaDeMiel/EstadiaNocturna.jpg'
    },
    { 
      id:4,
      nombre: 'Hotel',
      categoria: 'lunaDeMiel',
      precio: 20000,
      imagen: 'assets/images/lunaDeMiel/Hotel.jpg'
    },
    { 
      id:5,
      nombre: 'Nueva York',
      categoria: 'lunaDeMiel',
      precio: 10000,
      imagen: 'assets/images/lunaDeMiel/nuevaYork.jpg'
    },
    { 
      id:6,
      nombre: 'Parapente',
      categoria: 'Excursiones',
      precio: 13000,
      imagen: 'assets/images/Excursiones/Parapente.jpg'
    },
    { 
      id:7,
      nombre: 'Playa Caribeña',
      categoria: 'Excursiones',
      precio: 13000,
      imagen: 'assets/images/Excursiones/playaCaribeña.jpg'
    },
    { 
      id:8,
      nombre: 'Travesia',
      categoria: 'Excursiones',
      precio: 13000,
      imagen: 'assets/images/Excursiones/Travesia.jpg'
    },
    { 
      id:9,
      nombre: 'Yoga',
      categoria: 'Excursiones',
      precio: 13000,
      imagen: 'assets/images/Excursiones/yoga.jpg'
    },
    { 
      id:10,
      nombre: 'Silla',
      categoria: 'Cocina',
      precio: 13000,
      imagen: 'assets/images/Cocina/silla.jpg'
    },

    // Agrega más productos...
  ];

=======
  productos: Producto[] = [];
>>>>>>> desarrollo
  filtroCategoria: string = '';
  filtroPrecio: string = '';
  filtroBusqueda: string = '';
<<<<<<< HEAD
  cartService: any;
  dialog: any;
=======
  productosFiltrados: Producto[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // En el ciclo de vida ngOnInit, obtén los productos del servicio
    this.productos = this.productService.getProducts();
    this.aplicarFiltro();
  }
  
>>>>>>> desarrollo

  aplicarFiltro() {
    console.log('Productos antes del filtro:', this.productos);
    let productosFiltradosTemp = [...this.productos];

    console.log('Filtro Categoría:', this.filtroCategoria);
   if (this.filtroCategoria) {
  productosFiltradosTemp = productosFiltradosTemp.filter(producto => producto.categoria === this.filtroCategoria);
}
  
    console.log('Productos filtrados:', this.productosFiltrados);
    if (this.filtroPrecio) {
      const [minPrice, maxPrice] = this.filtroPrecio.split('-');
      const minPriceInt = parseInt(minPrice);
      const maxPriceInt = parseInt(maxPrice);
    
      productosFiltradosTemp = productosFiltradosTemp.filter(producto => {
        return producto.precio >= minPriceInt && producto.precio <= maxPriceInt;
      });
    }
  
    // Filtrar los productos por nombre si se ingresa una búsqueda
    if (this.filtroBusqueda) {
      productosFiltradosTemp = productosFiltradosTemp.filter(producto =>
        producto.nombre.toLowerCase().includes(this.filtroBusqueda.toLowerCase())
      );
    }
<<<<<<< HEAD
  }

  productosFiltrados: Producto[] = [];

  constructor(private carritoService: CarritoService) {
    this.productosFiltrados = [...this.productos];
  }

  agregarAlCarrito(producto: Producto) {
    this.carrito.push(producto);
  }

  quitarDelCarrito(id: number) {
    const index = this.carrito.findIndex(p => p.id === id);
    if (index !== -1) {
      this.carrito.splice(index, 1);
    }
  }

  calcularTotal() {
    return this.carrito.reduce((total, producto) => total + producto.precio, 0);
  }

  finalizarCompra() {
    // Abre una ventana emergente con los productos del carrito y el total formateado
    const ventanaEmergente = window.open('', '_blank', 'width=400,height=400');
    
    if (ventanaEmergente) {
      // Formatea el total como una cadena con formato de moneda
      const totalFormateado = this.calcularTotal().toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  
      // Genera el contenido HTML que se mostrará en la ventana emergente
      const carritoHTML = this.carrito.map(item => `${item.nombre} - ${item.precio.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`).join('<br>');
  
      ventanaEmergente.document.write(`<h1>Detalle de la Compra</h1><p>${carritoHTML}</p><p>Total: ${totalFormateado}</p>`);
    } else {
      // Manejo de caso en el que la ventana emergente no se pudo abrir
      console.error('No se pudo abrir la ventana emergente. Puede que esté bloqueada por el navegador.');
    }
  }
}
=======
    this.productosFiltrados = productosFiltradosTemp;
    console.log('Productos filtrados:', this.productosFiltrados);
  }
}

>>>>>>> desarrollo
