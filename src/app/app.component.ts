import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name ='Fernando';
  lastname= 'Molina';
  colores=['negro','amarillo','rojo','verde'];
  mostrar=false;
  btn_msj="Mostrar";

  addcolor(color){
    this.colores.push(color.value);
    color.value="";
    return false;
  }
  mostrarcolores(){
    this.mostrar=!this.mostrar;
    if(this.btn_msj=="Ocultar"){
      this.btn_msj="Mostrar";
    }else{
      this.btn_msj="Ocultar";
    }
  }

}
