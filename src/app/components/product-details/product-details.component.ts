import { Component, input, output } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product = input.required<IProduct>()
  buy = output<IProduct>()

  getDiscountedClasses(product: IProduct) {
    if (product.discount > 0 ) return ['strikethrough']
    return []
  }

  getImageUrl(product: IProduct) {
    return '/images/robot-parts/' + product.imageName
  }

  buyButtonClicked(product: IProduct) {
    this.buy.emit(product)
  }
}
