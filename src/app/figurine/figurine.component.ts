import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figurine',
  imports: [],
  templateUrl: './figurine.component.html',
  styleUrl: './figurine.component.css'
})
export class FigurineComponent {

  @Input() figurine1 =[
    { art:"images/Cesar.jpg",
      name: "Asterix",
      descriptif: 'Figurine faites main inspirées de la bande dessinée Astérix et Obélix.',
      prix: 10,
     },
    
  ]
    

}
