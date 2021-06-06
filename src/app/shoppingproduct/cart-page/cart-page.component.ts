import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartBaseComponent } from '../cart-base/cart-base.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent extends CartBaseComponent{

 

  constructor(protected cartService: CartService) {
    super(cartService);
}

ngOnInit() {

}
changeQuantity = (cart,quantity) => {
    cart.quantity = quantity;
    this.cartService.reloadCart(this.cartList);
}

}
