import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar1Component } from '../navbar1/navbar1.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,Navbar1Component,ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

