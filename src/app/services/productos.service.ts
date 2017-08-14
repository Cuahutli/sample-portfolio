import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ProductosService {
  productos:any[] = [];
  cargando_productos:boolean = false;

  constructor( private http:Http) {
      this.cargar_productos();
  }

  public cargar_productos(){
      this.http.get('https://paginaweb-efa39.firebaseio.com/productos_idx.json')
              .subscribe( res => {
                  console.log(res.json());
                  this.productos = res.json();
                  this.cargando_productos = true;
                  
              });
  }

}
