import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'au-petit-village';
}
