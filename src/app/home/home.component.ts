import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FigurineComponent } from '../figurine/figurine.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,FigurineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = "Bienvenue Au Petit Village"

}
