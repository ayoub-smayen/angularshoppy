import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartBaseComponent } from '../cart-base/cart-base.component';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.scss']
})
export class CartPopupComponent extends CartBaseComponent {

  

  @HostBinding("class.visible") isVisible:boolean = false;

  constructor(
      protected cartService: CartService,
      private eleref: ElementRef
  ) {
      super(cartService);
  }
  ngOnInit() {
      this.cartService.toggleCartSubject.subscribe(res => {
          this.isVisible = res;
      });
  }

    toggle(){
       this.cartService.toggleCart();
    }
  onPageClick = (event) => {
      if (this.isVisible && !this.eleref.nativeElement.contains(event.target) && event.target.className !== 'cart-remove'){
          this.cartService.toggleCart();
      }
  };

}
