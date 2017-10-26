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

  addcolor(color){
    this.colores.push(color.value);
    color.value="";
    return false;
  }

}
