import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'about', component: AboutComponent }

];
