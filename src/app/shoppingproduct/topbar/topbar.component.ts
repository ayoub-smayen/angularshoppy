import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  public collapse: boolean = false;
  public cart_num:number;
  constructor(
      private cartService: CartService
  ) { }

  ngOnInit() {
      this.cartService.cartListSubject
          .subscribe(res => {
              this.cart_num = res.length;
          })
  }
  toggleCartPopup = (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.cartService.toggleCart()
  }

}
